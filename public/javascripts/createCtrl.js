angular.module("task").controller('createCtrl', ['taskService', '$location', 'ngToast', function(taskService, $location, ngToast){  
    var vm = this;  
    //render blank  
    vm.task = {  
      no:"",
      title:"",  
      desc:"",  
      taskdt:""  
    }  
      
    //on save create task  
    vm.createTask = function(isAdd){  
      taskService.createTask(this.task).then(function(success){  
        ngToast.create("Task Created successfully");  
        if(isAdd){  
          vm.task = {  
            no:"",
            title:"",  
            desc:"",  
            taskdt:""  
          }  
        }else{  
          $location.path("/");  
        }  
      },function(err){  
        ngToast.create("Failed Try again !");  
      });  
    }  
}])