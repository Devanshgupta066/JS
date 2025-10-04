// //Primitive (call by value)

// // 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn= false;
// const outsideTemp = null;
// let userEmail;//undefined orjust = undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');  

// console.log(id === anotherId);//same valuse pass but still diff

// const bigNumber = 9204029374029304820834n;//add n at last

// //Non primitive or Reference type(call by reference)

// //Array, Object, Function

// const heros = ["krrish", "minnal murli", "Bhavesh joshi"]//array
// //object
// let myObj = {
//     name:"dev",
//     age: 20,
// }

// //func
// const myfunc = function(){
//     console.log("tmkoc")
// }

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);//typeof null is = object
// console.log(typeof id);

//for more info https://262.ecma-international.org/5.1/#sec-11.4.3


//***************************************************************/

// Stack (Primitive), Heap (Non Primitve)

let myName = "Devansh Gupta";
let anotherName = myName;
anotherName = "Dev Gupta";

console.log(myName);
console.log(anotherName);
//the copy is made and then changed not the original one
//that's why call by value

let userOne = {
    email:"dev@gmail.com",
    upi:"dev@oksbi",
}

let userTwo = userOne;

userTwo.email = "god@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
//both are changed since call by reference i.e. both have same refernce for heap memory not a copy is made
 