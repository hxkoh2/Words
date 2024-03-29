var natural = require('natural');
var fs = require('fs');
var thesaurus = require('./thesaurus.js').thesaurus;
var eng_words = require('./words.js').eng_words;

/**
* This function takes a string of the text contained in the file uploaded.
* It splits the string up into separate words and counts how many times each word is used.
* @param text: the text in the uploaded file
* @return words: an object where keys are the words and values are the number of occurrences
*/
var organizeWords = function(text){
	//text is a string
	//return a dictionary/object
	var words = {};
	var tokenizer = new natural.WordTokenizer();
	natural.PorterStemmer.attach();

	var imptWords = text.toLowerCase().tokenizeAndStem();
	var textArr = tokenizer.tokenize(text);

	//add real words into words object with count of 0
	for(var j=0; j< imptWords.length; j++){
		if(eng_words.indexOf(imptWords[j])>-1)
			words[imptWords[j]] = 0;
	}

	for(var i=0; i< textArr.length; i++){
		var root = natural.PorterStemmer.stem(textArr[i]);
		if(Object.keys(words).indexOf(root) > -1)
			words[root] += 1;
	}
	return words;
};



/**
* This function finds the top n most used words. 
* @param text: the text in the uploaded file
* @param n: the number of words to display
* @return topWords: an object of the top used words, with the word itself, number 
* occurences, and list of synonyms
*/
var mostUsedWords = function(n, text){
	var words = organizeWords(text);
	var wordsArr = [];
	for(var key in words){
		var word = {};
		word['word'] = key;
		word['num'] = words[key];
		wordsArr.push(word);
	}

	wordsArr.sort(function(a, b){return (b['num'] - a['num'])});

	var topWords = [];
	if(n > wordsArr.length)
		topWords = wordsArr;
	else{
		for(var k=0; k<n; k++)
			topWords.push(wordsArr[k]);
	}

	for(var m=0; m<topWords.length; m++){
		var wordToFind = topWords[m]['word'];
		topWords[m]['syn'] = thesaurus[wordToFind];
	}
	return topWords;
};


	
/**
* This function generates the HTML that displays the most used words and their synonyms
* @param topWords: an array of the top used words
* @return str: the string of HTML
*/	
var generateHTML = function(topWords){
	//generating HTML
	var str = '<ol>';
	for(var m=0; m<topWords.length; m++){
		str += '<li><strong id="showSyn">' + topWords[m]['word'] + '</strong><ul id="syn" style="display:none">'; 
		if(topWords[m]['syn'] != null){
			for(var i=0; i<topWords[m]['syn'].length; i++){
				str += '<li class="option">' + topWords[m]['syn'][i] + '</li>';
			}
			str += '</ul></li><br>';
		}
	}
	str += '</ol>';
	return str;
};


/**
* This function finds the words in the text that match the most used word clicked
* @param text: the file text
* @param word: the most used word
* @return: the html text with a <p> tag around all the instances of the most used words 
*/
var findWords = function(text, word){
	var newText = "";
	var str = text;
	var start, index, before, after;
	if(str.indexOf(word) != -1){
		while(str.indexOf(word) >= 0){
			start = 0;
			index = str.indexOf(word);
			before = str.substring(start, index);
			for(var i=index; (str.charAt(i)>='A' && str.charAt(i)<='Z') || (str.charAt(i)>='a' && str.charAt(i)<='z'); i++);
			//i will be at the position right after the word
			after = str.substring(i);
			//word = str.substring(index, i);
			newText = newText + before + "<p class='change'>" + word + "</p>";
			str = after;
		}
		return newText + after;
	}
	else{
		return text;
	}
};


module.exports = {'organizeWords': organizeWords, 'mostUsedWords': mostUsedWords, 'generateHTML': generateHTML, 'findWords': findWords};