/*
자바스크립트 객체 3

*/

var o = {
    name : "둘리",
    age : 10,
    isFemale : false
}

var f = function(){
    console.log("Hello World")
}



f();

console.log(o);
console.log("===객체의 확장===================");
o.anthoer ={
    name : "마이클",
    age: 30 
};

console.log(o);

f.anthoer ={
    name : "마이클",
    age: 30, 
    info: function(){
                console.log("info 호출 ! "+ this.name + ":" + this .age);
    }
};



console.log(f.anthoer)
f.anthoer.info();


console.log("==== 기본 타입은 확장 X ===================");

i2.anthoer ={};
console.log(i2);

i1.anthoer ={};
console.log(i1.anthoer);

