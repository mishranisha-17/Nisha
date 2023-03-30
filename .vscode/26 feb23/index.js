//creating server : npm express
//connented outline of each line express
//get request
//connected outline of get request
//difference between json and send
//what happens if you send multiple responses
//how to set statuscode
//url,body,method
//url=route,parameter


const express = require('express');  //import express
const app = express();  //create new express
const port = 3000;
const data = require("./data")

//get request

app.get('/data', (req, res) => {
  res.json({
        message: "My workplace",
        login: true,
        data:data
   })
    //status(201)
    res.send(data)
    res.status(201).json({
        message: "sending data on my workplace",
        login: true,
        data:data

    })
   
})

//server listen request

app.listen(port,()=>{
    console.log("server has been started on", port );
});