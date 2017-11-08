//bootstraping the angular application  
var app = angular.module("task", ["ngRoute", "angularjs-datetime-picker", "ngToast"]);  

//route config  
app.config(function($routeProvider, $locationProvider) {  
$locationProvider.hashPrefix('');  
$routeProvider  
.when("/", {  
  templateUrl : "tpls/list.html",  
  controller : "listCtrl",  
  controllerAs : "vm"  
})  
.when("/tasks", {  
  templateUrl : "tpls/task.html",  
  controller : "createCtrl",  
  controllerAs : "vm"  
})  
.when("/tasks/:id", {  
  templateUrl : "tpls/task.html",  
  controller : "editCtrl",  
  controllerAs : "vm"  
})  
.otherwise({redirectTo:'/'});  
});