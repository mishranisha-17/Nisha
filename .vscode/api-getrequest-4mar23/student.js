const express = require("express");
const student=require("./student.json")
const app = express();
const fs = require("fs");
const port = 8000;
app.use(express.json());

app.get("/student", function (req, res) {
  res.send(student);
});

// Read .json file

fs.readFile("/student.json",(err,data)=>
{
    if(err){
    console.log("there is an error");
}
else{
    console.log(data);
    res.send(data)
}
});

app.listen(port, () => {
  console.log("Server is running on ", port);
});




