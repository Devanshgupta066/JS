// for loop

for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

//nested loops

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} & Inner loop: ${i}`);
//         console.log(i + ' * ' + j + ' = ' + i*j);
        
//     }  
// }

let arr = ["Batman", "Spiderman", "Peacemaker"]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// break and continue

for (let i = 1; i <= 10; i++) {
    if(i == 5) break;
    console.log(i);
}
console.log("");

for (let i = 1; i <= 10; i++) {
    if(i == 5) continue;
    console.log(i);
}