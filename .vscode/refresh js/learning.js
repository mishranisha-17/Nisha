//globel object:
// //everything in js is an object,except primitive datatype
// //in js function are know as first class citizen:in js function can be stored in varibles and also can
// //be passed as a values to another function:

// //named function
// //function declaration
// function fun(param1,param2){

// }
// fun(arg1,arg2)

// //anonymous function: no name function
// let fun2=function(){

// }
// fun2()

// //arrow function: es6 varient

// let sample =() =>{

// }
// sample()

// //IIFE :immediately invoked functional expression;

// (()=>{

// })()

// //diffrence between function and functional expression?


//undefiend
// function sum(a,b){
//     let c = a+b;
//     return c;
// }
// // console.log(sum);
// //console.log(sum(2,3));
// function calc(callback,a,b){
//     return callback(a,b);
// }
// console.log(calc(sum,2,3));


// function sub(a,b){
//     let c = a-b;
//     return c;
// }
// //calc is a parent function
// function calc(callback,a,b){
//     return callback(a,b);
// }
// console.log(calc(sub,6,3));

//scope : its a boundry till where a varible life is there.

// let b = 3;
// function fun(){
//     console.log(b);
// }
// fun()

function fun(){
    return function fun2(){
        console.log("hi i am a child function");
    }
}
let result = fun()
console.log(result);