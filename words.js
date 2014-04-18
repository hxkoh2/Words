/*Compile a giant array of English words*/

var fs = require('fs');

var eng_words;


var eng_words = [];
var temp;

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/A Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/B Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/C Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/D Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/E Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/F Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/G Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/H Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/I Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/J Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/K Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/L Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/M Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/N Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/O Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/P Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/Q Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/R Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/S Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/T Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/U Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/V Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/W Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/X Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/Y Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

temp = fs.readFileSync('./EOWL-v1.1.2/CSV Format/Z Words.csv');
eng_words = eng_words.concat(temp.toString().split('\n'));

module.exports = {'eng_words': eng_words};