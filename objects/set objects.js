//Set can be used to remove
//duplicate values from arrays
 
let myarr=[1,2,3,4,4,3,2];
let myset=new Set(myarr);

let uniquearray=[...myset];
console.log(uniquearray);

//Creating a set to store unique numbers
const uniqueNumbers=new Set();
uniqueNumbers.add(5);
uniqueNumbers.add(10);
uniqueNumbers.add(2);
uniqueNumbers.add(10);
console.log(uniqueNumbers);
console.log(uniqueNumbers.size);
console.log(uniqueNumbers.has(10));
uniqueNumbers.delete(10);
console.log(uniqueNumbers.size);
