const ex01 = function(param ,callback){
    // 비동기 코드
    // ex) 파일시스템 접근 , 네트워크 통신 , Sql to DB

    setTimeout(() => {
        if(param == 'param-data'){
            callback(null , 'ok')
        }
        else{
            callback(new Error('fail'))
        }
    }, 2000);

    
}

// test 01 
ex01("param-data" , function(err , res){
      if(err){
          console.error(err);
      }else{
          console.log(res);
      }

});
console.log("waits.....")

// test 02
ex01("param-error" , function(err , res){
    if(err){
        console.error(err);
    }else{
        console.log(res);
    }

});
console.log("waits.....")






