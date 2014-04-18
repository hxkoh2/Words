var fs = require('fs');
var hbs = require('handlebars');
var formidable = require('formidable');
var http = require('http');
var util = require('util');
var url = require('url');
var mostUsedWords = require('./analyze.js').mostUsedWords;
var generateHTML = require('./analyze.js').generateHTML;
var concat = require('concat-stream');
var express = require('express');

var app = express();

/*This endpoint handles get requests to load the main page*/
app.get('/', function(req, res){
	fs.readFile('./untamed/index.hbs', function(err, data){
		if(err) throw err;
		var template = hbs.compile(data.toString());
		res.send(template());
	});
});


/*This endoint handles file uploads*/
app.post('/upload-file', function(req, res){
	console.log('file uploaded');
	fs.readFile('./untamed/editing.hbs', function(err, data){
		if(err) throw err;
		var template = hbs.compile(data.toString());
		
		var form = new formidable.IncomingForm();
		form.keepExtensions = true;
	    form.parse(req, function(err, fields, files) {
			fs.readFile(files.fileForm.path, 'utf8', function(err,data){
				if(err) throw err;
				res.send(template({fileContents: data}));
			});
	    });
	});
});


/*This endpoint handles requests to display the top used words*/
app.post('/query', function(req, res){
	req.pipe(concat(function(data){
		var form_data = url.parse('?'+data.toString(), true);
		var text = form_data.query.doc;
		var n = form_data.query.num;
		var topWordsArr = mostUsedWords(n,text);
		var str = generateHTML(topWordsArr);
		res.send(str)
	}));
});


/*This endpoint handles downloads of the changed file*/
app.post('/download', function(req, res){
	req.pipe(concat(function(data){
		var form_data = url.parse('?'+data.toString(), true);
		var text = form_data.query.text;
		console.log(text);
		res.setHeader('Content-disposition', 'attachment; filename=download.txt');
		res.setHeader('Content-type', 'text/plain');
		res.charset = 'UTF-8';
		res.send(text);		
	}));
});


/*This endpoint sends static files for page styling*/
app.use('/untamed', express.static('./untamed'));

app.listen(8000);
