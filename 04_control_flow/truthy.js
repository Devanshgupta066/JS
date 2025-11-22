const userEmail = "dev@mastercard.com";

// if(userEmail){
//     console.log("Got user email.");
// } else {
//     console.log("Don't have user email.");
// }

// falsy values -- treated as false
//false, 0, -0, BigInt0n, "", null, undefined, NaN

//truthy values -- treated as true
// "0", 'false', " ", [], {}, function(){},

//*********** Nullish Coalescing Operator (??): null undefined ***********

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//************* Terniary Operator ***********//

// condition ? true : false

const iceTeaPrice = 180
iceTeaPrice <= 150 ? console.log("less tham 150") : console.log("more than 150");

