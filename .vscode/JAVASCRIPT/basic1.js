var arr=[1,2,3,4,5,6,7,8,9];
//determime the full length of an array
console.log(arr.length);
//remove an element from the begning of an array
console.log(arr.shift());
console.log(arr);
//insert an element in the begning of an array
arr.unshift("50");
console.log(arr);
//remove an element from the end of an array
arr.pop();
console.log(arr);
//insert an element in the begning of an array
arr.push(50,60);
console.log(arr);
//find the index of an array
console.log(arr.indexOf(50));
//if the value is not available it will return -1
console.log(arr.indexOf(500));
//find the last index of an array
console.log(arr.lastIndexOf(6));
//if the element is available in array
console.log(arr.includes(6));//true
console.log(arr.includes(5000));
//join method will convert any element into string if we pass everything in join function it will display all the element
console.log(arr.join("**"));
//print the reverse
console.log(arr.reverse());
//join two arrays
var arr1 = [62,15,85,51];
console.log(arr.concat(arr1));