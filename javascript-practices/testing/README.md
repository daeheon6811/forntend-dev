# 테스트


## 자바스크립트 단위 테스트 도구
1. Java : JUnit == JavaScript : JSUnit()
2. 자바스크립트 단위 테스트 도구는 20여가지가 넘게 있다.
3. JSUnit 프로젝트 ---> Jasmine (2010년~현재)
    -  자체 assertion을 가지고 있다
4. DOM 직접 조작 애플리케이션(JQuery 기반) -> QUnit(세팅하기 쉽고 간편하게 테스트)
5. Node 기반 백엔드 어플리케이션 테스트 -> Mocha(Promise 기반 비동기 테스트)
    -  Promise 기반 비동기 테스트
    -  자체 Assertion
    -  대신 외부 assertion 라이브러리 다양하게 지원하다 . (chai , should.js , expeact.js)
    -  유연하고 확장성이 좋다,.
6. Jasmine , Qunit , Mocha , Jest(React 개발 테스트 도구)



## Mocha 설치
```bash
$ npm i -D mocha
$ npx mocha --version
9.0.2

```


## Mocha 테스트 케이스 모듈(.js , .esm) 작성


[ex01.js]
```javascript
exports.hello = () => "Hello World";
```

[test/ex01.js]
```javascript
const assert = require("assert");
const { describe } = require("mocha");

const { hello } = require('../ex01');




// 람다는 되도록 안쓰는거 추천
describe('hello()' , function() {
    it(' "Hello World" 문자열을 반환 해야함', function() {
          assert.strictEqual(hello() , "Hello Wolrd")

    })
})
```

**테스트 수행1(개별적)**
```bash
$ npx mocha test/ex01
```


**테스트 수행2(일괄적)**
 ```bash
$ npx mocha
```

**테스트 수행3(npm scripts stage)**
1. package.json 이 scripts test stage를 추가 
 ```json
.
.
 "scripts": {
    "test": "npx mocha"
  },
.
. 이후 

$ npm test

```


## Assertion 기초
[ex02.js]
```javascript
exports.add = (a ,b) => a + b;
exports.na = () => [2,4,6];
exports.X = function(){     // 순수 함수로만 생성자를 만들수 있다.
}
```
[ex02.test01.js]
```javascript

const assert = require('assert');
const { add } = require('./ex02');

try{
    assert.equal(add(10 , 20/*actual*/) , '30'/*expect*/);// == 
    assert.strictEqual(add(10 , 20/*actual*/) , '30'/*expect*/);// ===  
    console.log('ok')
}
catch(err){
    console.log('fail:',err.message);
}
```


strict Mode로 assertion을 하여야 한다.
1. equal(deprecteds)-> strictEqual
2. NotEqual(deprecteds) ->strictNotEqual
3. deepEqual(deprecteds)-> strictDeepEqual
4. notDeepEqual(deprecteds) -> notstrictNotEqual





