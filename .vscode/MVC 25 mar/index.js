const express = require('express');
const mongoose= requir("mongoose");
const app = express();
const port =3000;
mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7");

const root = require("./Router/authorRouter");
app.use("./root",root);



app.listen(3000,() =>{
console.log("Server start in port 3000")
});