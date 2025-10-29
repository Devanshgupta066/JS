
const marvel = ["Captain America", "Spiderman", "Ironman"]
const dc = ["Superman", "Batman", "Peacemaker"]

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);//not so good way to join arrays
//therefore
const superheroes = marvel.concat(dc)//doesn't merge but gives output new array
// console.log(superheroes);

//best tarika (preferable)

const allHeroes = [...marvel,...dc]
// console.log(allHeroes);

const khatarnakarray = [1,5,7,8,[9,7,2],0,[3,7,[1,2],5],8]
//to sort these or make them in 1 single array
const solve_khatarnakarray = khatarnakarray.flat(Infinity)//can give depth in argument 
console.log(solve_khatarnakarray);

console.log(Array.isArray("sffbdfbs"))
console.log(Array.isArray(["sfdvsvss"]));

console.log(Array.from("sffbdfbs"))//converts in array
console.log(Array.from({name: "dev"}))//interesting since cant convert object in array therefore gives empty array 

let one = 100
let two = 200
let three = 300

console.log(Array.of(one,two,three))//make an array