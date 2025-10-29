//array

const arr = [18,16,15,34,17,32]
// console.log(arr[2]);

//arrays methods

arr.push(5)
arr.pop()

//to add and remove from 1st position
arr.unshift(12)
arr.shift()

// console.log(arr.includes(19))
// console.log(arr.indexOf(18));

const newArr = arr.join()//binds the arr
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

//slice , splice

console.log("A " , arr);

const myarr1 = arr.slice(1,3)//3rd not included 
console.log(myarr1);

console.log("B " , arr);//after slicing

const myarr2 = arr.splice(1,3)

console.log(myarr2)//3rd included and it also gets removed from original array

console.log("C " , arr);
