const req01 = function(url , callback){
     console.log('req01 [' + url  + ']');
     setTimeout(function(){
          const resp = {
              data : "Hello Wolrd" ,
          }
          callback(resp);
     } , 1000);
}


req01("http://www.kickscar.com/api" , function(response){
console.log(response);
});