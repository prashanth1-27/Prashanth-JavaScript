function example(){
    // This is an example function that does nothing
    // It is here to demonstrate the structure of the code
    console.log("This is an example function.");
    if(true){
        let count=10;
        console.log(count); // 10
    }
}
example();
// console.log(count); // ReferenceError: count is not defined


/* // This code demonstrates block scope using let
function example(){
    let count=true
    console.log("This is an example function.");
    if(true){
        let count=10;
        console.log(count); // 10
    }
}
example();
// console.log(count); // ReferenceError: count is not defined */