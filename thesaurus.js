/**
* This module creates a thesaurus in the form of a JSON object to use when finding synonyms
*/

var thesaurus = require('thesaurus');
var fs = require('fs');

var updated_thesaurus = thesaurus.load('./MyThes-1.0/th_en_US_new.dat');

var thesaurusJSON = JSON.parse(updated_thesaurus.toJson());

module.exports = {'thesaurus': thesaurusJSON};