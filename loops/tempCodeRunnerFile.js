/* Types of loops: 1.for 2.while 3.do while 4.for of 5.for in */

/* For Loop: */
for(let i=1;i<=10;i++){
    console.log("for_res:",i);
}

/* While Loop: */
let j=1;
while (j<=5){
    console.log("While_loop:",j);
    j++;
}

/* do while Loop: */
let k=0;
do{
    console.log("dowhile_res:",k);
    k++;
}
while(k>1);

/* Break statement: */
for(let i=1;i<=5;i++){
    if(i==5){
        break;
    }
    console.log("break_res:",i);
}

/* continue statement: */
for(let i=1;i<8;i++){
    if(i==2){
        continue;
    }
    console.log("continue_res:",i);
}

let arr=[1,2,3,4];
for(let i=1;i<arr.length;i++){
    console.log("arr_length:",arr[i]);
}

/* for of loop: */
for(let val of arr){
    console.log("forof_res:",val);
}

/* for in loop: */
for(let val in arr){
    console.log("forin_res:",val);
}


const array=[1,2,3];