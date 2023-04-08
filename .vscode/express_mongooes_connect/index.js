const express = require("express");
 const bodyparser = require("body-parser");
const mongoose = require("mongoose");
//orm: object relation model
const server = express();
//connecting the orm
//connecting the database
//creating yhe model
//for add: creating the object from the model
//object.save

mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7");
// app.use = (express.json());

//creating model
//name of collection,schema

// console.log("connection sucessfule")

const b7user ={
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
};

const user =mongooes.model("users",b7user)
app.post("/create user",function(req,res){
 const newusers = new user({
 name:req.body.name,
 age :req.body.age,
})
})

newuser.save(function(err,result){
    if(err){
        console.log("there is an error")
    }
    else
    res.send("data added succesfully")
})


server.listen(3000,()=>{
    console.log("server is running on port 3000")

})