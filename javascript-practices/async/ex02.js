const ex02 = function(param){

    return new Promise(function(resolve, reject){
  // 비동기 코드
    // ex) 파일시스템 접근 , 네트워크 통신 , Sql to DB

    setTimeout(() => {
        if(param == 'param-data'){
            resolve('ok')
        }
        else{
            reject(new Error('fail'))
        }
    }, 2000);

    })

  
    
}



if(require.main == module){



// test 01 
ex02("param-data").then(function(res){
  console.log(res);
})


// test 02
ex02("param-error").catch(function(err){

    console.log(err);

})

console.log("waits.....")

}
else{
    module.exports = ex02;
    
}