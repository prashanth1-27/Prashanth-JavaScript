/* Array:An array is an datatype that allows you to store multipule values ina single variable */

/* Array Methods:
1.Get------->1.indexof()
             2.fixed()
             3.filter()
             4.slice()


2.Add------->1.push()
             2.concat()


3.Remove---->1.splice()
            2.pop()
            3.shift()


4.Others----->1.reverse()
              2.some()
              3.every()
              4.sort()
              5.join()
              6.length()  */

/* we can know the element of the index_values by using "INDEXOF()" */
const array=[0,1,2,3,4,5,6,7];
let a=array.indexOf(7);
console.log("indexof_res:",a);

/* it only print the condition ie remainder which  gets first zero by using "FIND()" */
let arrays=[1,2,3,4,5,6];
let b=arrays.find((num)=>num%2==0);
console.log("find_res:",b);

/* it can filter all the elements in the array which remainder will get zero by using "FILTER()" */
const arr = [1,2,3,4,5,6,7,8];
let c=arr.filter((num)=>num%2==0);
console.log("filter_res:",c);

/* it only performs on strings in the array by using "SLICE()" */
const arrayss=["a","b","c","d","e","f","g","h","i"];
let e=arrayss.slice(2,7);
console.log("slice_res:",e);

/* we can push array elements into the array by using "PUSH()" */
let array1=[1,2,3,4];
array1.push(5,6,7,8);
console.log("push_res:",array1);

/* we can add the elements in the array by using "CONCAT()" */
let array2=[1,2,7];
let array3=array2.concat(4,1247);
console.log("concat_res:",array3);

/* removes end index in the array by using "POP()"  */
let array4=[1,2,3,4];
let ar=array4.pop();
console.log(ar);
console.log("pop_res:",array4);

/* removes first index in the array by using "SHIFT" */
let array5=[1,2,3,4];
let shifted=array5.shift();
console.log(shifted);
console.log("shift_res:",array5);

/* Splice are of three types : 1.add 2.remove 3.replace */

/* 1.add splice: */
let letter=[1,2,3,4,5,6,7];
letter.splice(1,0,"27","14");
console.log("add_splice",letter);

/* 2.remove splice: */
letter.splice(0,5);
console.log("remove_splice:",letter);

/* replace splice: */
letter.splice(1,1,'77');
console.log("replace_splice:",letter);

/* it is used for mapping the array and creates the new array by MAP():*/
let array7=[1,2,3,4,5,6,7];
let maparray=array7.map((e)=>e*2);
console.log("map_res:",maparray);


/* it doesnot create an new array we use in it by use of FOREACH(): */
let array8=[1,2,3,4];
array8.forEach((e)=> { 
    console.log(e*4);
});

