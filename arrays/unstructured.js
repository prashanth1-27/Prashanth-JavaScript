const fruits=['apple','banana','orange','grapes'];
/* Destructing */
const [firstfruit,secondfruit,thirdfruit]=fruits;
console.log(firstfruit);
console.log(secondfruit);
console.log(thirdfruit);

/* Arguments: */
sum(1,2,3);
function sum(){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
}

/*String:  */
const str="Hello";
console.log(str);
console.log(str.length);
console.log(str[3]);

var arraylike={0:'a',1:'b',2:'c',length: 3};

/* using array form() */
var array1=Array.from(arraylike);
console.log(array1);

/* using spread syntax 
var array2 = [...arraylike];
console.log(array2);
*/

var array3=Array.prototype.slice.call(arraylike);
console.log(array3);
