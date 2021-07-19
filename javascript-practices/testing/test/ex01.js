const assert = require("assert");
const { describe } = require("mocha");

const { hello } = require('../ex01');




// 람다는 되도록 안쓰는거 추천
describe('hello()' , function() {
    it(' "Hello World" 문자열을 반환 해야함', function() {
          assert.strictEqual(hello() , "Hello World")

    })
})