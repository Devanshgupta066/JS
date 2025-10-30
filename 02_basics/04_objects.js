
const tinderuser = {}

tinderuser.name = "bhumi"
tinderuser.id = "vinci"
tinderuser.isLoggedIn = true 

// console.log(tinderuser);

const newuser = {
    email: "dev@mastercard.com",
    fullname: {
        userfullname: {
            firstname: "bhumi",
            lastname: "kharya"
        }
    }
}

// console.log(newuser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
const obj4 = {obj1, obj2}

// console.log(obj3);

// const obj5 = Object.assign(obj1, obj2, obj3)//actually by this the target object is obj1 so tghe another method is
const obj6 =  Object.assign({}, obj1, obj2, obj3)//add an empty target object

// console.log(obj5);
console.log(obj6);
console.log(obj1);//ab target object obj1 nahi hai to usme add nahi hoga 

const obj7 = {...obj1,...obj2,...obj3}//Best is spreading technique

console.log(obj7);

const users = [
    {
        email: "hey@mastercard.com",
        id: "55"
    },
    {
        email: "hey@mastercard.com",
        id: "55"
    },
    {
        email: "hey@mastercard.com",
        id: "55"
    },
    {
        email: "hey@mastercard.com",
        id: "55"
    },
    {
        email: "hey@mastercard.com",
        id: "55"
    }
]
console.log(users[0].id);

console.log(tinderuser);

console.log(Object.keys(tinderuser));//can use these later 
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));

