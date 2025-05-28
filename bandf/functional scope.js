function example(){
    var count=true;
    if(true){
        var count=10;
        console.log(count);
    }
    console.log(count);
}
example();
// console.log(count); // ReferenceError: count is not defined