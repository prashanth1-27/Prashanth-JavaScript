const person={
    name:'prashanth',
    age:21,
};
//Dot notation:
console.log(person.name);
//Bracket notation:
console.log(person['age']);

//Dynamically assign property name 
//to a variable

var propertyname='age';
console.log(person[propertyname]);
console.log(person.propertyname);