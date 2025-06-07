// The map object is a collection of key value pairs where each key can be of any type,
//and each value can also be of any type.
//A map maintains the order of key value pairs as they were inserted.

//Creating a map to store person details
const personDetails=new Map();
personDetails.set("name","Alice");
personDetails.set("age",30);
console.log(personDetails.get("name"));
console.log(personDetails.has("age"));


personDetails.delete("age");
console.log(personDetails.size);
