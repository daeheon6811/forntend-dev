/*
1. 자바스크립트 객체는 function 타입과 object 타입 2가지가 있다.

2. 보통 function 타입 객체는 함수라고 부른다

3. 따라서! 자바스크립트 객체라 부르는 것은 object 타입의 객체를 가리킨다.


*/

// 생성 방법 1
// 생성자 함수를 사용하는 방법
// Number() , Boolean() , String() , Object()


var Goods = function(price){
   this.price = price;
}

var o1 = new Object();
o1.name = "둘리";
o1.number = "11";
o1.another = new Object();
o1.another.name = "마이콜";
o1.another.age = 30;

console.log(o1);
console.log(o1.name);
console.log(o1.another.name);





// 생성 방법 2
var o2 = {};
o2.name = "둘리";
o2.number = "11";
o2.another = new Object();
o2.another.name = "마이콜";
o2.another.age = 30;

console.log(o2);
console.log(o2.name);
console.log(o2.another.name);

// 생성 방법 3 = JavaScript Object Notaion JSON
o3 = {
     name: "둘리", 
     age : 10,
     another : {
          name: "마이콜",
          age : 30
     }
};

console.log(o3);
console.log(o3.name);
console.log(o3.another.name);


/* 
XmlHttpRequest 호스트 객체 (브라우저) 사용해서 통신(Ajax)을 한다.

*/

var respone = {
 name : "둘리" ,
 age : 10 ,
 email : "wow1186@naver.com",
 another : {
     name: "마이콜" , 
     age: 30
 }
};

var UserVo = eval("(" + respone + ")");
console.log(UserVo.name + ":" + UserVo.email);












