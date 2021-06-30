// Array  확장 : List prototype 확장

Array.prototype.insert = function (index , values ){
    console.log(this);
}

// 리스트로 사용하기
var a = [1,2,4];
a.insert(2,3);

Array.prototype.insert();

var a=[1,2,4];

console.log(a);
a.insert(2,3);
console.log(a);





var f = function (param){
    console.log(this );
}


f();
o = {};
f.call(o , "hello");
f.apply(o);




