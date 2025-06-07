// 4 ways to iterative over the properties of an object
/*
1.for in loop
2.object.keys()&forEach()
3.object.values()&forEach() */

const person={
    name:"Spiderman",
    age:20,
};

//1.Using for ......in loop
for(let prop in person){
    console.log(prop+": "+person[prop]);
}

//2.Objects.keys()&forEach()
Object.keys(person).forEach((prop)=>{
    console.log(prop+": "+person[prop]);
});


//3.Using object.values()and forEach()
Object.values(person).forEach((value)=>{
    console.log(value);
});

