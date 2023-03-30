const express = require("express");
const app = express();
const port = 3000;
const data =require("./deta")

//get,post
 app.get("/info", (res,res) => {
        res.json({
              message: "sending data",
                 login: true,
                 data : data
         })
           // res.send("data")
        })

app.listen(port, ()=>{
    console.log("server has been started on port 3000")
})