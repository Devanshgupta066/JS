//string to num
let score = "33abc" //1st example "33" , 2nd null

console.log(typeof score);
console.log(typeof (score));

let StringtoNum = Number(score);

console.log(typeof StringtoNum);
console.log(StringtoNum);

// "33" => 33 i.e. string
// "33abc" => NaN - not a number
// true => 1 , false => 0


//string or 1,0 to bool

let isloggedIn = "dev";

console.log(isloggedIn);

console.log(typeof isloggedIn);

let stringtobool = Boolean(isloggedIn);

console.log(typeof stringtobool);

console.log(stringtobool);

// 1=> true, 0 => false
//"" => false
//"dev" => true

//num to string
let num1 = 7

let stringtonum = String(num1)

console.log(typeof stringtonum);
console.log(stringtonum);

