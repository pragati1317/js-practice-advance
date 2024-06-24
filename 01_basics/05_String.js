const nameValue = "hitesh";
const repoCount =50

console.log(nameValue + repoCount + "value");

 console.log(`Hello my name is ${nameValue} and my repo count is ${repoCount}`);

 const gameName =new String("Pragati-ghd");

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 ,7); 
// console.log(newString); 

// const str = gameName.slice(0, 5);  //   Second parameter represent length of the string.
// console.log(str); 

// const arr=[8,2,3,92,4,23,14,38];  

// const removeStr= arr.splice(0, 5);

const anotherString =gameName.slice(-8, 4);  
// Negative Index can be used to get the Reverse Arr /string result 

console.log(anotherString);

// console.log(removeStr); 
// console.log(arr); // That is the remaning arr.