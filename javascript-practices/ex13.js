//String


// 배열처럼 접근이 가능하다.
var str1 = "Hello Wolrd";
for(var i = 0; i < str.length; i++){
    console.log(str1[i]);  
}

var str2 = "Hello";
var str3 = "World";
var str4 = str2 + " " + str3;

console.log(str4);

var str5 = 5 + "5";
console.log(str5);

var str6  = "boolean" + true;
console.log(str6);




var url = "http://mysite.com/user";

var param = {
    no: 10,
    name : "박대헌",
    email: "wow1186@naver.com"
}
var url5 = url + "?" + toQueryString(param);
