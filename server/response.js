module.exports = {  
    //error response  
    error:function(err){  
      return{  
        status:"ERROR",  
        message:err  
      };  
    },  
    //success response  
    success:function(dt,msg){  
      return{  
        status:"SUCCESS",  
        data:dt,  
        message:msg  
      };  
    }  
  }