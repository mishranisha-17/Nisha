const authorController = require("../Controller/authorController")
const express = require("express")
const root = express.Router()
root.post("/info",authorController)
module.exports = root
