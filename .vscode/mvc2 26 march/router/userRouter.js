const usercontroller=require("../controller/user controller")
const express = require("express")
const root = express.Router()
root.post("/register",usercontroller)
module.exports = root