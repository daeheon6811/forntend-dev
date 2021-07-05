// function 객체 메서드 call


var email = "dooly@gmail.com";
global.name = "둘리";

console.log(name, global.email);
console.log(name, global.name);


var f1 = function(){
    console.log(this);
}

f1();

// this 바꾸기

var o = {
    name: "마이콜" ,
}



var f2 = function (s){
    console.log(s + " " + this.name);
}

f2.call(o,"hi");


