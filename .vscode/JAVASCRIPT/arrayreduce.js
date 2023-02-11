//array reduce is a predefined method
//used to reduce an array to a single value by passing a callback function on each element of the array
//reduece () method executes a reducer function for array element, the reduce()method return a single value
//reduce ()method does not execute the function for empty array elements
//we can find Min Max value by using array.reduce
//we can find Min Max value by using array.reduce



// var arrnum= [5,7,29,38,12]
// for(let index = 0; index < arrnum.length; index++)
// console.log('array[index];:' ,arrnum[index]);

// var arrnum=[2,3,4,8,17,12]
// var sum = 0
// var result = arrnum.reduce(((sum,num) =>sum += num),0)
// var sorted = arrnum.sort((a,b)=>a-b)
// console.log('sorted:',sorted);
// console.log(result);

var arrnum = [1,5,9,76,6,6,6,6,6,6]
var sum = 0
var result = arrnum.reduce(((sum,num) => sum += num),0) 
var sorted = arrnum.sort((a,b)=> a-b)

var filter = arrnum.filter()
console.log('sorted:',sorted);
console.log(result);