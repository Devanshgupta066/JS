// reduce function

const myNums = [5,4,7,10,1,9,3,2,8,6]

// const myTotal = myNums.reduce(function (accumulator, currentValue)  {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0 )
// //0 is the initial value

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price:3999
    },
    {
        itemName: "ML course",
        price:9999
    },
    {
        itemName: "Data science course",
        price:12999
    },
    {
        itemName: "Full stack course",
        price:7999
    },
]

const totalPrice = shoppingCart.reduce( (acc,item) => acc + item.price ,0 )

console.log(totalPrice);


//other example 
const max = [5,9,1,7].reduce((a, c) => a > c ? a : c);
// find max value
console.log(max);
