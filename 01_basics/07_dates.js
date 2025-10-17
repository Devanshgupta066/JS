//dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myDOB = new Date(2004, 11, 30, 5, 15);one way
let myDOB = new Date("2004-12-30");//2nd way

// console.log(myDOB.toDateString());
// console.log(myDOB.toLocaleString());

let mytimestamp = Date.now();

// console.log(mytimestamp);
// console.log(myDOB.getTime());

// console.log(Math.floor(Date.now()/1000));//for not getting decimal values

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth() + 1);//in JS month generally starts from 0
// console.log(newDate.getDay());

//can customise timezone
newDate.toLocaleString('default',{
    weekday:"long"

})