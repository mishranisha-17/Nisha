//5 post request
//stoped the server
//non presistent data
//store the data into storage
//file and it  can be a database     
//mongo db:how to store the data into a database
//multer
//files
//package called fs
//file object
//method to do file operation
//what is the method ?
//peropperty

const x={
    name:"nisha",  //properties of object
    age: 72,        //properties of object
    profession: function(){         //profession is a method
        console.log("teaching");

    },
};

//file object functions
//read,write,append,delete,open

FileSystem.open("file name","w",(err,file)=>
{
    console.log(file);
});

Fs.readfile("fileName",(err,data)=>
{
    if(err){
    console.log("there is an error");
}
else{
    console.log(data)
}
});

 fs.write("filename","content",(err)=>
 {
    if(err){
        console.log("there is an error");
 }
 });
 
fs.append("filename","content",(err)=>
{
    if(err){
        console.log("this is an error");
    }

});

function findName(name){
    for(let i = 0;i < MediaStreamAudioDestinationNode.length;i++)
    if (student[i].name==name){
        return student[i];
        break;
    }
}




//write 

// app.post("/student", (req, res) => 
// {

//   console.log(req.body);

//  res.json({message:"Your request is sucessfull!"})

// });

//  fs.write File("z","content",(err)=>
//  {
//     if(err){
//         console.log("there is an error");
//  }
//  });


//  app.listen(port, () => {
//   console.log("Server is running on ", port);
// });

 






// // app.get("/student/name/:name", function (req, res) {
// //     const found=student.find(Element=>Element.name==req.params.name)
// //   res.send(found);
// // });
