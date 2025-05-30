/* bodmas=brackets,order,division,multiplication,addition,subtraction */

/* operator precedence */
let a=10;
let b=20;
let c=30;
let result=a+b*c+(a-b)/c;
console.log(result);

/* Conditional operatros: */
/*  1.if/else statements: */

let x=27;
if(x>27){
    console.log("x is greater than 27");
}
else if(x<27){
    console.log("x is less than 27");
}
else{
    console.log("x is equal to 27");
}

/*  2.ternary operator: */
let y=14;
let res=y>10?"true":"false";
console.log(res);

/* 3.switch statements: */
let week="Friday";
switch(week){
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
        console.log("It's Wednesday");
        break;
    case "Thursday":
        console.log("It's Thursday");
        break;
    case "Friday":
        console.log("It's Friday");
        break;
    case "Saturday":
        console.log("It's Saturday");
        break;
    case "Sunday":
        console.log("It's Sunday");
        break;
    default:
        console.log("Not a valid day of the week");
}