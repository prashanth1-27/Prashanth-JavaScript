let person = {
    name:"Alice",
    age:21
};

//1.Using in the operator:
console.log("name" in person);
console.log("city" in person);
//console.log(typeof(person.name));
//console.log(typeof(person.age));

//2.Using the hasOwnProperty() Method
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("city"));

//3.comparing with undefined
console.log(person.name!==undefined);
console.log(person.city!==undefined);