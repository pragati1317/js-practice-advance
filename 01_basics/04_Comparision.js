
// console.log("2" > 1);  // true 
// console.log("02" > 1); // true

// console.log(null >0);  // result : false
// console.log(null ==0);  // result : false
// console.log(null >=0 );  // result : true

console.log(undefined == 0);  // result : false;
console.log(undefined >0); // result : false;
console.log(undefined <0); // result : false

/*  Reason is that an equality check (== , ===, != , !==) and comparisions > < > = <= work differently.
Comparisons convert null to anumber , treating it as 0. 
That's why  null >=0 is true and null > 0 is  false. 

*/

/*  == ---> check only for Value (Convertion is Done to check the value )
 ==== ----> check for Both datatype of the value and also Value.
*/

