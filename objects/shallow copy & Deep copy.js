//1.Shallow copy: shallow copy in nested objects case will modify the parent object property value,
// if cloned object property values is changed.
// But deep copy will not modify the parent object property value.

const person={
    name:'happy Birthday',
    age:27,
    address: {
        city:'Delhi',
        country:'India',
    }
};
//1.Shallow copy using object.assign():
const ShallowCopy=Object.assign({},person);

ShallowCopy.address.city= 'Mumbai';

console.log(person.address.city);
console.log(ShallowCopy.address.city);

//2.Deep copy using JSON.parrse()&JSON.stringfy():
const deepCopy =JSON.parse(JSON.stringify(person));
deepCopy.address.city='Bangalore';
console.log(person.address.city);
console.log(deepCopy.address.city);