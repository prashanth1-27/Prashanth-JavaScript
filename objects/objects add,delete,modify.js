//Blank Object:
var person={};

//Adding Properties
person.name="Happy";
person.age=35;
person.country="India"

//Modifying properties
person.age=27;

//Deleting Properties
delete person.age;

var person={
    name:"Prashanth",
    age:27
};
console.log(person);
console.log(person.age=28);
console.log(typeof(delete person.age));
console.log(person);
