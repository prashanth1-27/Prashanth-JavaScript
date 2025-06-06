/* Different types of functions: 
Function: A function is a resuable block of code that perform specific tasks.
1.Named function.
2.Anonymous function.
3.Function Expression.
4.Arrow Function.
5.IIFE
6.Callback Function.
7.Higher-Order Function*/

/* 1.NAMED FUNCTION: */
function sum(a,b){
    return a+b;
};
console.log(sum(5,3));

/* 2.ANONYMOUS FUNCTION: */
console.log(function(a,b){
    return a+b;
}(4,7));

/* 3.ARROW FUNCTION: */
//Traditional Approach.
function add(x,y){
    return x+y;
}
console.log(add(1,2));
/* =>*/

const prash=(x,y) => (x+y);
console.log(prash(14,27));

/* 4.FUNCTION EXPRESSION: */
// Anonymous Function Expression:
const prashanth= function(a,b){
    return a+b;
};
console.log(prashanth(2,4));

//Named Function:
const prashu=function sum(a,b){
    return a+b;
};
console.log(prashu(2,7));

/* CALLBACK FUNCTION: */
function call(x,y){
    return x+y;
}
let a=3,b=4;
let result= call(a,b)
console.log(result);


/* function call back: */
function add(x, y) {
    return x + y;
}

function multiplication(x, y) {
    return x * y;
}

function sub(x, y) {
    return x - y;
}

function division(x, y) {
    return y !== 0 ? x / y : "Error: Division by zero";
}

function display(x, y, operation) {
    var result = operation(x, y);
    console.log(result);
}

display(10, 5, add);
display(10, 5, multiplication);
display(10, 5, sub);
display(10, 5, division);


/* HIGHER-ORDER FUNCNTION: */
// Take one or more functions as arguments
function hof(func){
    func();
}
hof(sayHello);
function sayHello(){
    console.log("Hello!");
}

//Return a function as a result
function CreateAdder(number){
    return function(value){
        return value+number;

    };
}
const addFive = CreateAdder(5);
console.log(addFive(2));


/* Pass arguments are of three types:
1.Positional arguments.
2.Named arguments.
3.Arguments object */

//Positional Arguments:
 function arg(a,b){
    console.log(a+b);
 }
 arg(27,4);

 //Named arguments:
 var person ={
    name:"Prashanth",
    role:"Developer"
 };
 function greet(person){
    console.log(person.name +" "+ person.role);
 }
greet(person);

//3.Arguments object:

sum(0,1,2,3,4,5,6,7,8,9);
function sum(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments.length);
}



/* Default parameters */
function greet(name="Prashanth"){
    console.log("Hello, "+ name +"!");
}
greet();
greet("Tyson");

