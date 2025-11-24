// for each loop 

const atmkbfjg = ["cpp", "js", "java", "rn", "py"]

// atmkbfjg.forEach( function (val) {
//     console.log(val);
    
// } )


//using arrow function
// atmkbfjg.forEach( (val) => {console.log(val);} )

// atmkbfjg.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "Cplusplus",
        langFileName: "cpp"
    }

]

myCoding.forEach( (item) => {
    console.log(item.langFileName);
} )