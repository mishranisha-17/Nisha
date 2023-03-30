const express = require("express");
const data = require("./data");
const mangooseObject=require("mangoose");
console.log('mangooseObject: ', mangooseObject);
const app = express();
//connecting the ORM
mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7");
console.log("connection succefule")
port = 9000;
const products=data.products
const categories=data.categories

app.get("/data", function (req, res) {
  res.send(products);
});
