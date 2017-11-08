//get the router object from express app  
var express = require('express');  
var router = express.Router();  
  
//the controller to be called to each route  
var taskCtrl = require('./taskCtrl');  
  
//when url is task/ GET <get list of tasks>  
router.get('/', taskCtrl.getAllTask);  
  
//when url is task/:id GET <get single task of id>  
router.get('/:id', taskCtrl.getSingleTask);  
  
//when url is task/:id PUT <update single task of id>  
router.put('/:id', taskCtrl.editTask);  
  
//when url is task/ POST <create single task from posted data>  
router.post('/', taskCtrl.insertTask);  
  
//when url is task/:id DELETE <delete single task of id>  
router.delete('/:id', taskCtrl.deleteTask);  
  
//export this so to be used inside index.js  
module.exports = router;