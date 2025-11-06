const user = {
    username: "Dev",
    price: 499,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "Ranu"
// user.welcomeMessage();

// console.log(this);

//const nolan = function (){
//     let username = "Dev"
//     // console.log(this);
//     console.log(this.username);
// }

// nolan();

//***** ARROW FUNC *****//
//ORIGINAL FUNC
// const addFour = (num1, num2) => {
//     return num1 + num2 ;
// }

// console.log(addFour(4,5));

//arrow func (dont use return )

// const addFour = (num1, num2) =>  num1 + num2 ;

//or

const addFour = (num1, num2) =>  (num1 + num2) ;

console.log(addFour(5,55));

const arr = [5,7,0,2,12]

// arr.forEach()