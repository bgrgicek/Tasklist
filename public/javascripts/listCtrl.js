angular.module("task").controller('listCtrl', ['taskService', 'ngToast', function(taskService, ngToast){  
    
    var vm = this;  
    vm.tasks = []  
      
    //load task from server  
    vm.loadTasks = function(){  
      taskService.getTasks().then(function(success){  
      vm.tasks = success.data.data;  
    }, function(err){  
      alert(err);  
    });    
    }  
      
    //delete task on request  
    vm.deleteTask = function(id){  
      if(!confirm("Are you sure you want to delete this record ?"))  
        return;  
      taskService.deleteTask(id).then(function(success){  
        ngToast.create("Task Deleted successfully");  
        vm.loadTasks();  
      },function(err){  
        ngToast.create("Failed, try again!");  
      })  
    }  
    vm.loadTasks();  
  }])