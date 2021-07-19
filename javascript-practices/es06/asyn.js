const req01 = function(url , callback){
     console.log('req01 [' + url  + ']');
     setTimeout(function(){
          const resp = {
              data : "Hello Wolrd" ,
          }
          callback(resp);
     } , 3000);
}
const req02 = function(url){ //req02 : db.query , $.ajax Promise
    console.log('req02 ['+url+ '] ');
    return new Promise(function(resolve , reject){
           setTimeout(function(){
               const resp = {
                   data: "Hello World"
               }
               resolve(resp);
               // error
               //reject("failes req02");
           },  3000);
    });
}

req01("http://www.kickscar.com/api" , function(response){
console.log(response);
});

req02("http://www.kickscar.com/api" , function(response){
console.log(response);
}).then(function(response){
  console.log(response);
})
.catch(function(err){
  console.error(err);
});


const fetch = async function(url){ 
           
    console.log("fetch:" + url);
    const response = await req02(url);
    return response;
}


fetch("http//www.kickscar.com/api")
.then(function(response){
    console.log(response);
});



const index = async function() {
    const response = await fetch("http://www.wow1186.com/api")
    console.log(response);
}

index();
