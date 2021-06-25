/*
변수와 데이터 타입

[기본타입 (primitive type) , 유사 객체]
1. number
2. boolean
3. string
4. undefined

[객체]
Number()
Boolean()
String()


*/
a = 10;
var u; 
// var u = undefined; 와 동일 자바스크립트 선언
var i = 10;
var b = true;
var s = "hello world";
console.log("u : " + typeof(u));
console.log("i : " + typeof(i));
console.log("b : " + typeof(b));
console.log("s: " + typeof(s));

console.log(new String(s).toUpperCase(s));