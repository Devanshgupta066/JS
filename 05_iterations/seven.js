const myNums = [5,4,7,0,1,9,3,2,8,6]

// const newnums = myNums.map( (num) => num + 10 )
// console.log(newnums);

//chaining

const newNums = myNums
            .map( (num) => num * 10 )
            .map( (num) => num + 1  )
            .filter( (num) => num >= 40 )

console.log(newNums);
