let p = new Promise((res,rej)=>{
 if(1==2)
      res(true);
 else
   rej(false);
});

p.then((message)=>{
    console.log("inside then method");
},(message)=>{
    console.log("inside than method");
})

.catch((message)=>{
    console.log("inside catch method");
});