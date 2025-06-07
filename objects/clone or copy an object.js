//Original object
const originalObject={
    name:"Bhimba",
    age:17,
    city:'Delhi'
};
 
//Method 1: Spread syntax(shallow copy)
const clonedObjectSpread={...originalObject};

//method 2: Object.assign() (shallow copy)
//parameters: EventTarget,source
const clonedObjectAssign=Object.assign({},originalObject);

//Method 3: JSON.parse() and JSON.stringify()  (deep copy)
const clonedObjectJSON=JSON.parse(JSON.stringify(originalObject));