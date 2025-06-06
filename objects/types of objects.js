/* Object: An object is a data type that allows you to store key values pairs.Objects are classified into
1.String/number/boolean/null/undefined.
2.Array
3.Function.
4.Object.  */

//Obbject Example
let person={
    name:"Prashanth",
    hobbies:["coder","Developer","Writer"],
    greet: function() {
        console.log("Name: "+this.name);
    },
};
console.log(person.name);
console.log(person.hobbies[1]);
person.greet();

/* Ways to create and intialize an object.They are of :
1.Object Literal.
2.Object Constructor
3.Object.Create() Method */

//1.object Literal
var pers={
    name:"prashu",
    age :20,
    role:"Student"
};
console.log(pers);

//2.Object Constructor
var prisons=new Object();
prisons.name="prashu";
prisons.age=20;
prisons.role="Student";
console.log(prisons);


//3.Object.create() Method
var Per={
    name:"",
    age:20,
    role:""
};
var men=Object.create(Per);
men.name="Happy";
men.age=20;
men.role="Trainer";