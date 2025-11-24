// loop in objects

// for In loops

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(key , ':-', myObj[key]);
    
}

const atmkbfjg = ["cpp", "js", "java", "rn", "py"]

for (const key in atmkbfjg) {
    console.log(key, 'is', atmkbfjg[key]);
}

//for in loops give skeys i.e. default position numbers

const map = new Map();
map.set('IN', "India")
map.set('NK', "North Korea")
map.set('SWE', "Sweden")

for (const key in map) {
    console.log(key);
    
}// the map is not iteratable that's why no result