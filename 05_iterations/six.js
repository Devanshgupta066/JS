const coding = ["cpp", "js", "java", "rn", "py"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item;
// } )//doesnt return anything

// console.log(values);

const myNum = [5,4,7,0,1,9,3,2,8,6]
//filter func reurn the value 
// const newNum = myNum.filter( (num) => num > 4 )

// console.log(newNum);

////by for each loop

const newNums = []

// myNum.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// });

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (item) => item.genre == 'Fiction' )

  const userBooksyear = books.filter( (item) => item.publish >= 1995 )

  const userBooksSpecific = books.filter( (item) => item.publish >= 1995 && item.genre == 'History' )

  console.log(userBooks);
  console.log("Books published after 1995: ", userBooksyear);
  console.log("History Books published after 1995: ", userBooksSpecific);
  
  
// if opening scope after arrow function then use return keyword otherwise dont 
// for eg. 
//   const userBooks = books.filter( (item) => {return item.genre == 'Fiction'} )
//   const userBooks = books.filter( (item) => item.genre == 'Fiction' )
