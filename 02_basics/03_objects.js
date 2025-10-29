//singleton
//Object.create

//object literals

const sym1 = Symbol("key1")

const apan = {
    name: "Dev",
    "Full name": "Dev Gupta",
    age: 20,
    [sym1]: "apnikey",//to use it as symbol
    email: "devanshgupta066@email.com",
    isLoogedIn: false,
    lastLogindays: ["Monday", "tuesday"]
}

// console.log(apan.email);
// console.log(apan["email"]);//this is also important since it acts as a string
// console.log(apan["Full name"]);//can't acccess full name by .
// console.log(apan[sym1]);

// apan.email = "devofficial@gmail.com"
// Object.freeze(apan);//now can't be changed 
// apan.email = "guptaji@gmail.com"
// console.log(apan);

apan.greeting = function(){
    console.log("kya bolte miya bhai");
}

apan.greetingTwo = function(){
    console.log(`whatsup whatsup fembruh,${this.name}`);
}

console.log(apan.greeting());
console.log(apan.greetingTwo());

