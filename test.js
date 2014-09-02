var organizeWords = require('./analyze.js').organizeWords;
var mostUsedWords = require('./analyze.js').mostUsedWords;
var generateHTML = require('./analyze.js').generateHTML;
var findWords = require('./analyze.js').findWords;
var assert = require('assert');

//call functions to test
testOrganize_Words();
testMost_Used_Words();
testFind_Words();
console.log("All tests passed");


function testOrganize_Words(){
	var str = "I go to the grocery store. My mom is at the store store."  
	//the stemmed version should have: go, groceri, store, mom, store, store
	var arr = organizeWords(str);
	//calculate size
	var size = 0, key;
    for(key in arr){
        size++;
    }
	assert.equal(size, 3, 'organizeWords failed: did not parse text properly.');
	assert.equal(Object.keys(arr).indexOf("go"), 0, 'organizeWords failed: should have "go"');
	assert.equal(arr.go, 1, 'organizeWords failed: parsed "go" incorrectly');
	assert.equal(Object.keys(arr).indexOf("store"), 1, 'organizeWords failed: should have "store"');
	assert.equal(arr.store, 3, 'organizeWords failed: parsed "store" incorrectly');
	assert.equal(Object.keys(arr).indexOf("mom"), 2, 'organizeWords failed: should have "mom"');
	assert.equal(arr.mom, 1, 'organizeWords failed: parsed "mom" incorrectly');
}

function testMost_Used_Words(){
	var str = "I go to the grocery store, mom. My mom is at the store store."  
	var topWords = mostUsedWords(2, str);
	assert.equal(topWords.length, 2, "mostUsedWords failed: wrong number of results");
	assert.equal(topWords[0].word, "store", "mostUsedWords failed: wrong top word");
	assert.equal(topWords[1].word, "mom", "mostUsedWords failed: wrong second top word");
}


function testFind_Words(){
	var str = "I go to the grocery store. My mom is at the store store."  
	var newStr = findWords(str, "store");
	var expectedStr = "I go to the grocery <p id='change'>store</p>. My mom is at the <p id='change'>store</p> <p id='change'>store</p>.";
	assert.equal(newStr, expectedStr, "findWords failed: did not properply change text for words found");
}