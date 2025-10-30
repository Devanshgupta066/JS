
function addTwonumbers(num1, num2){
    console.log("dev");
    return num1 + num2;
}

// console.log(addTwonumbers(5,5));
// console.log(addTwonumbers(5,"4"));
// console.log(addTwonumbers(5,"a"));

function loginUserMessage (username){
    if(username === undefined){
        console.log("username to daal chutiye");
        return
    }
    return `aa gaya bkl ${username} `
}

// console.log(loginUserMessage("Aman"));
// console.log(loginUserMessage());//its undefined not null

//for undefined no of arguments use rest operator(...)
function calcCartPrice(val1,val2,...num1) {
    return num1
}

console.log(calcCartPrice(200,400,500,800,1500));//first two passed and rest are combined as num1

const user = {
    username: "hitesh",
    price: 599
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username: "Dev",
    price: 399
})

const newarray = [200,500,800,700,1000]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(newarray));
console.log(returnSecondValue([11436,1552194,15853,155450]));