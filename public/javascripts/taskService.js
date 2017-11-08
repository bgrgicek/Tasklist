//defining an angular service  
angular.module("task").factory('taskService', function($http){
    var taskService = {};
    var url = "/task"
      
    //create task
    taskService.createTask = function(data){
      return $http.post(url, data);
    };
    
    //edit task  
    taskService.editTask = function(id, data){
      return $http.put(url + "/" + id, data);
    };

    //get all tasks
    taskService.getTasks = function(){
      return $http.get(url);
    };  
    
    //get single task by ID  
    taskService.getTask = function(id){
      return $http.get(url + "/" + id);
    };  
    
    //delete single task by ID  
    taskService.deleteTask = function(id){
      return $http.delete(url + "/" + id);
    };

    return taskService;
  });