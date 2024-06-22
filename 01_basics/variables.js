const accountId=144553
let accountEmail ="hitesh@google.com"
var accountPassword="12345"
accountCity="Indore"
let accountState;

// var Create a scope Problem so Basically If I variable is Defined using Var , and Same Variable Name is used in another file and Assigned some other Value ,
// It will change the value of the variable everywhere.

// {
//     // It is treated as Scope 
// }
accountEmail ="hc@hc.com"
accountPassword="t34yu34"
accountCity="Bengaluru"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword,accountCity, accountState]) // return data in the form of Table 


/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
