 //import the DB configuration and mongodb driver  
 var database = require('./db');  
 var mongodb = require('mongodb');  
   
module.exports = {  
  insertTask:function(data, cb){
    //database action for create task  
    database.db.collection("task").insertOne(data, function(err, dt){  
      if(err){  
        return cb(err, null);  
      }  
      return cb(null, data);  
    });  
  },  
  editTask:function(id, data, cb){  
    //database action for updating task by an given _id   
    var where = {"_id":new mongodb.ObjectID(id)}  
    database.db.collection("task").updateOne(where,{$set:data}, function(err, dt){  
      if(err){  
        return cb(err, null);  
      }  
      return cb(null, dt);  
    });  
  },  
  deleteTask:function(id, cb){  
    //database action for deleting task by an given _id   
    database.db.collection("task").deleteOne({"_id": new mongodb.ObjectID(id)}, function(err, dt){  
      if(err){  
        return cb(err, null);  
      }  
      return cb(null, dt);  
    });  
  },  
  getSingleTask:function(id, cb){  
    //database action to fetch single task by an given _id  
    database.db.collection("task").findOne({"_id":new mongodb.ObjectID(id)}, function(err, dt){  
      if(err){  
        return cb(err, null);  
      }  
      return cb(null, dt);  
    });  
  },  
  getAllTask:function(data, cb){  
    //database action to fetch all tasks   
    database.db.collection("task").find().toArray(function(err, dt){  
      if(err){  
        return cb(err, null);  
      }  
      return cb(null, dt);  
    });  
  }  
}