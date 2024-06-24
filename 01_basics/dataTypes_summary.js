
// Primitive  : call by value Type of dataType 
// 7 Types : String , Number , Boolean , null, undefined , Symbol, BigInt

//javascript is  Dynamically , Static Type langauge ?? 
// Dynamically , The varaible type is Define Dynamically. 

// const id= symbol('123')
// const anotherId=Symbol('123') // In Symbol if You pass same value , Still they are not Treated as Same.

const bigNumber =34652727672277222552525n // After using n in the last it become Big Int number.
// Non-Primitive : reference Type 

// Reference (Non primitive)

// Array , Objects ,Functions

const heros = ["shaktiman", "naagraj", "doga"]; 
let myObj={
    name : "hitesh",
    age : 22,
}


const myFunction = function(){
    console.log("Hello World");
}

// ++++++++++++++++++++++++++++++++++++++++++++=

// Stack (primitive) ,Heap (Non-Primitive)

let myYoutubeChannel = "LetsLearn";

let anothername =  myYoutubeChannel  // It is call by value 
anothername = "chaiaurcode"

console.log(myYoutubeChannel)
console.log(anothername);

let userOne ={
    email : "user@google.com",
    upi : "user@ybl"
} // It is Object it will store in Heap, call by reference.

let userTwo =userOne; // Reference 
userTwo.email = "pragati@google.com";

console.log ( " Value of email in userOne Object : ", userOne.email); 
console.log("Value of email in userTwo Object: ", userTwo.email); 
