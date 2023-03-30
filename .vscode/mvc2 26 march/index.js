const express = require('express');
const mongooes = require("mangooes");
const app=express();
const port =3000;
app.use=(express.json);
mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7");

const root= require("./Rouer/userRouter")
app.use("/root");
app.listen(port,()=>{
    console.log("port is running on 3000");

});