const assert = require('assert').strict;
const {add , na , x, X } = require('../ex02');

describe('ex02' , function(){
    describe('add()' , function(){
         it('should equal to 30' , function(){
            assert.equal(add(10,20),30); 
         })
         it('should deepequal to 30' , function(){
            assert.deepEqual(add(10,20),30); 
         })
 
    });
    describe('na()' , function(){

        it('should deepEqual to [2,4,6] deeply' , function(){
            assert.deepEqual(na(),[2,4,6]); 
         })

         it('should notEqual to [2,4,6] deeply' , function(){
            assert.notEqual(na(),[2,4,6]); 
         })

    });


    describe('X() constructor' , function(){
        it('equality(a ===b)' , function(){
            const a = new X();
            const b = a;
            assert.equal(a,b); 
         })

        it('not equality(a !==b)' , function(){
            const a = new X();
            const b=  new X();
            assert.notEqual(a,b); 
         })


         it('Equanity Between a and c' , function(){
            const a = new X();
            const b=  new X();
            assert.deepEqual(a,b); 
         })
         it('not Equanity Between a and c' , function(){
            const a = new X();
            const b=  new X();
            b.bar = 'foo'
            assert.notDeepEqual(a,b); 
         })
    });

});
