/* Arthematic Operator: */
let a = 10;
let b = 5;
let sum=a+b;
let difference=a-b;
let product=a*b;
let quotient=a/b;
let remainder=a%b;
let exponentition=a**b;
console.log("sum:",sum);
console.log("difference",difference);
console.log("product:",product);
console.log("quotient:",quotient);
console.log("remainder:",remainder);
console.log("exponentiation:",exponentition);

/* Assignment Operator: */
let x = 50;
x += 5; // x = x + 5
console.log(x);
let y=20;
y-=2; // x = x - 2
console.log(y);
let z=30;
z*=10; // z = z * 10
console.log(z);
let w=100;
w/=4; // w = w / 4
console.log(w);
let v=27;
v%=3; // v = v % 3
console.log(v);
let u =4;
u**=2; // u = u ** 2
console.log(u);

/* Comparison Operator: */
let num1=20;
let num2=30;
console.log(num1==num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1!=num2);
console.log(num1>num2);
console.log(num1<num2);

/* Logical Operator: */

let c=true;
let d=false;
console.log(c&&d); // Logical AND
console.log(c||d); // Logical OR
console.log(!d); // Logical NOT

/* Bitwise Operator: */
let m=5; // 0101 in binary
let n=3; // 0011 in binary
console.log(m & n); // Bitwise AND
console.log(m | n); // Bitwise OR
console.log(m ^ n); // Bitwise XOR
console.log(~m); // Bitwise NOT
console.log(m << 1); // Bitwise left shift
console.log(m >> 1); // Bitwise right shift

/* striong Operator: */
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // String concatenation
console.log(str3); // Output: Hello World
