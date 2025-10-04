// const name = "Devansh";
// const repoCount = 50;

// // console.log(name + repoCount);//old way
//baltics is new way tio jin strings
// console.log(`Hello myself ${name} and my repo count is ${repoCount}`);

const gameName = new String("Valor-ant");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("r"));//single of double both inverted comma works

const newString = gameName.substring(0, 4)//4 will not be included
console.log(newString);

const anotherString = gameName.slice(-10, 4);
console.log(anotherString);

const s1 = "    mota    ";
console.log(s1);
console.log(s1.trim());

const url = "https:///devgupta.com/dev%30gupta"

console.log(url.replace('%30' , '-'));

console.log(url.includes('dev'));
console.log(url.includes('devil'));

const str = new String ("allah-hu-akbar");

console.log(str.split('-'));