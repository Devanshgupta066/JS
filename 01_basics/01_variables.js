console.log("Dev gupta");

const accountId = 165401;
let accountEmail = "me@google.com"
var accountPassword = "12345" // not recommended
accountCity = "Indore"
let accountState

// accountId = 165165 // can't be changed
accountEmail = "dev@gmail.com"
accountPassword = "********"

console.log(accountId);

/* 
Prefer not to use var because of
issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

