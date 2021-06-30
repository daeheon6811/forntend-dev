// let block scope의 변수 정의



try{
    if(true){
        var i = 10;
        let j = 20;
    }    
    console.log(i,j);
}
catch(e) {
   console.error(e);
}


// var의 함수 범위
var f = function(){
    var m = 20;
}


console.log(i , j);

// 2 . const : Block Scope 의 상수 정의

