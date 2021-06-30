/**
 * 
 * 4. default parameger
 */

const print = function(strs , e='\n'){
    console.log(strs.join(e));
}


const power = function(x){
    return x * x;
}


print(["Hello" , "with" , "me"]);

let numbers = [1,2,3,4,5]

numbers.forEach(function(number){
console.log(`${number} : ${power(number)}`);
});

//ex1

console.log("\n----");
numbers.forEach(function(number){

    // let result = (x => {
    //     return x* x;
    //     })(number)
        
    let result = (x => x*x)(number);

    console.log(`${number} : ${result}`);
});


[5,3,15,1045,43,90].forEach(e =>{
  if(e % 5 == 0){
      process.stdout.write(`${e}\t`);
  }
});


console.log("\n----");
const dooly = {

     name : '둘리' , 
     friends : ['또치' , '마이콜' , '도우너' , '길동' , '희동이'],
     printFriends : function(){
         this.friends.forEach(z => {
             console.log(`${this.name} 의 친구 ${z}`);
         })
        
     }

}

dooly.printFriends()



numbers

