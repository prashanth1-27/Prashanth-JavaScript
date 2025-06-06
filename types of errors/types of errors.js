/*  There are four types of errors in the java script.They are:
1.
Syntax error.
2.Reference error.
3.Type error.
4.Range error*/

//!.Syntax Error:
console.log("Hello world"
//Missing closing paranthesis );

//2.Reference Error:
console.log(my variable);
// my variable is not defined.

//3.Type Error:
const number=42;
console.log(number.touppercase());
// number.touppercase is not a function only it converts strings not numbers.

//4.Range Error:
const array=[1,2,3,4];
console.log(array[10]);
// Index 10 is out of bounds