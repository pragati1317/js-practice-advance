// let score="33" ;
let score="33ca";

// score=req.body; // In This method , we don't Know what can be the type of value of score .
// console.log(typeof score); 

// let valueInNumber=Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber); // It is the javascript fault , It show the string is Converted into number , But in End the value is NAN(Not a Number)

let val= null;

// let valInNumber=Number(val); 
// console.log(typeof valInNumber); 
// console.log(valInNumber); // null will Converted into 0 in Number Convertion

// For Name character Based String convertion to Number Gives NAN value . 
// Boolean Value (true/false) will converted into 0, 1 format .

// "33" => 33
// "33abc" => value (NaN) , type(number)
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn =Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// for Boolean Convertion

// "" => false
// 1 => true
// "hitesh" => true 

// String Convertion

// let someNumber = 010;
let someNumber= 10;
let stringNumber=String(someNumber);
console.log(stringNumber); // It is returning the value 8 to 010, Need to Figure it Out 
console.log( typeof stringNumber);

// ************************* Operations **************************

let value= 3;
let negValue =-value;

// operations : [ +, -, * , ** , / , %] ** is exponention  

let str1="hello"
let str2= " hitesh"

let str3=str1 + str2

// console.log(str3)
// console.log(str1-str2); //It will return NaN , As It is Not possible in javascript

// console.log("1" + 2, typeof("1"+2));  // always treat as String .
// console.log(1 + "2", typeof (1+ "2")); 

// console.log("1"+ 2+ 2) ; //It is Executed One By one , every Time string and Appending other data in it.

// console.log(+true); // It will convert true into number 1
// console.log(+""); // It will convert empty string boolean Value 0 

let num1, num2, num3; 

num1 = num2 = num3 = 2+2;  // First num3 will get the value of (2+2); 

let gameCounter =100; 
console.log(gameCounter++);  // First It will Provide the Intial Value and then Print it. 
console.log(++gameCounter); // First Increm and Then print . 