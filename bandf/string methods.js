/* 1.substr()
2.substring()
3.replace()
4.search()
5.tolocaleuppercase()
6.tolocalelowercase()
7.indexof()
8.includes()
9.lastindexof()
10.concate()
11.slice()
12.charcodeat()
13.trim()
14.split()
15.match()
16.valueof()
17.toString()
18.charto() */


let str1="Hello";
let str2="Prashanth";
let result=str1+" "+str2;
console.log(result);

let result2=str1.concat(" ",str2);
console.log(result2);

let substring=str2.substring(0,8);
console.log(substring);

console.log(result.length);
console.log(result.toUpperCase());
console.log(result.toLowerCase());
 
let arr=result.split();
console.log(arr);

console.log(result.replace("Hello","Spiderman"));

let str="Spiderman Prashanth";
let trimmedstr=str.trim();
console.log(trimmedstr);

