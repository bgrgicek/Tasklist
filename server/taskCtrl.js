 //import service data layer/ response to be consumed  
 var taskService = require('./taskService');  
 var errorResponse = require('./response').error;  
 var successResponse = require('./response').success;  
   
module.exports = {  
  //create a new task and stores into DB  
  insertTask:function(req, res){  
    taskService.insertTask(req.body, function(err, dt){  
    if(err){  
      //if error send error response  
      return res.send(errorResponse(err));  
    }  
    //else send success response  
    res.send(successResponse(dt, null));  
    });  
  },  
  
  //updates a task in DB  
  editTask:function(req, res){  
    taskService.editTask(req.params.id, req.body, function(err, dt){  
    if(err){  
      return res.send(errorResponse(err));  
    }  
    res.send(successResponse(dt, null))  
    });  
  },  
  
  //deletes a task from DB  
  deleteTask:function(req, res){  
    taskService.deleteTask(req.params.id, function(err, dt){  
    if(err){  
      return res.send(errorResponse(err));  
    }  
    res.send(successResponse(dt, null))  
    });  
  },  
  
  //fetch single task with given id  
  getSingleTask:function(req, res){  
    //console.log(req.params.id);  
    taskService.getSingleTask(req.params.id, function(err, dt){  
    if(err){  
      return res.send(errorResponse(err));  
    }  
    res.send(successResponse(dt, null))  
    });  
  },  
  
  //fetch all avilable tasks  
  getAllTask:function(req, res){  
    taskService.getAllTask(null, function(err, dt){  
    if(err){  
      return res.send(errorResponse(err));  
    }  
    res.send(successResponse(dt, null))  
    });  
  }  
}  