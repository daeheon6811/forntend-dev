console.log("===========생성자 함수");


// 1 . 생성자 함수
var a1 = new Array();
console.log(typeof(a1) , a1 instanceof Array , a1.length); //배열 요소에 값을 지정한다

// 초기값을 지정할 수 있다.


// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 동적으로 배열은 늘어난다.
var a2 = new Array(10);
a2[0] = 0;
a2[10] = 0;
console.log(a2.length);


// 초기값을 지정할 수 있다.
var a3 = new Array(0,1,2,3,4,5);
console.log(a3.length);

// Array VS Object
console.log("====== Array VS Object ===============")
a4 = [];
a4[0] = 0;
a4["1"] = 1;

console.log(a4["0"], a4[1], a4.length);


for(prop in a4){
    console.log("prop" + prop + ":" + typeof(prop));
}

console.log("===========생성자 함수");


// 1 . 생성자 함수
var a1 = new Array();
console.log(typeof(a1) , a1 instanceof Array , a1.length); //배열 요소에 값을 지정한다

// 초기값을 지정할 수 있다.


// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 동적으로 배열은 늘어난다.
var a2 = new Array(10);
a2[0] = 0;
a2[10] = 0;
console.log(a2.length);


// 초기값을 지정할 수 있다.
var a3 = new Array(0,1,2,3,4,5);
console.log(a3.length);

// Array VS Object
console.log("====== Array VS Object ===============")
a4 = [];
a4[0] = 0;
a4["1"] = 1;

console.log(a4["0"] , a4[1] , a4.length);

for(prop in a4.length){
    console.log("prop" + prop + ":" + typeof(prop));
}

var colors = ['black', 'white', 'red'];
var fruits = ['apples', 'banana', 'red'];

var a1 = fruits.concat(colors);
console.log(a1);

var str = fruits.join(":");
console.log(str);

var color = colors.pop();
console.log(color);
console.log(colors);





