//require mongoclient from mongodb dependency  
var MongoClient = require('mongodb').MongoClient;  

//our local mongodb url where tasks is the name of the database  
var url = 'mongodb://localhost:27017/tasks';  

//the whole module will be exported to index.js  
module.exports = {  
 initialize: function(next){  
  //A middleware hook to perform extra operations currently will initialize DB  
  this.initializeDB(next);  
 },  
 initializeDB: function(next){  
  //connect to mongoDB if error throw error else return to callback  
  MongoClient.connect(url, function(err, db) {  
   if(err){  
    next(err);  
   } else {  
    module.exports.db = db;  
    next();  
   }  
  });  
 }  
} 