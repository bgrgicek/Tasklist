//importing the express server from dependency  
var express = require('express');  

//importing body-parser so to parse body params in POST request  
var bodyParser = require('body-parser');  

//path module to serve static content  
var path = require('path');  

//import route for REST  
var task = require('./server/taskRoute');  

//importing the Database config file  
var dbs = require('./server/db');

//defining app  
var app = express();  

//defining port  
var port = 8082;  

// configure the app to use bodyParser()  
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());

//provide details of static resources to be served  
app.use(express.static(path.join(__dirname, 'public')));

//let the app use task  
app.use('/task', task);

//calling the Db initialize function and passing callback so that it can be ensured server starts only if connected to DB  
dbs.initialize(function(err) {  
if(err){
console.log("Error : mongo not running");  
}else{  
app.listen(port, "0.0.0.0", function(){  
  console.log("App successfully started at port " + port + " BRKATI GADE");
});
}
});

app.use("/styles", express.static(__dirname + '/public/stylesheets'));  
app.use("/scripts", express.static(__dirname + '/public/javascripts'));  
app.use("/img", express.static(__dirname + '/public/images'));  
app.use("/templates", express.static(__dirname + '/public/tpls'));  