//Lets require/import the HTTP module
var http = require('http');
var express = require("express");
var app = express();
var path = require('path');
//Lets define a port we want to listen to
const PORT=8080; 

// We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}
// app.set(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
//Create a server
var server = http.createServer(handleRequest);


app.get('/index', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/svg', function(req, res){                                                                                             
	res.sendFile(path.join(__dirname +'/svg.html'));
});

app.get('/scatterplot', function(req, res){                                                                                             
	res.sendFile(path.join(__dirname +'/scatterplot.html'));
});

//Lets start our server
app.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});