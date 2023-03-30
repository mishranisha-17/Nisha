function apicall(id, callback){
setTimeout(function(){
    console.log("i am making a api call..");
    callback({
        id: id,
        name:"nisha",
    });
},2000);
}

//callback function
//promises
//async await
//can we trigger a function when i have data
//open
//function as an object
//function as an argument of an function in js
// js everything 
console.log("before");
apicall(1,function(user){
console.log(user);
});
    console.log("after");
    //function as an argument

