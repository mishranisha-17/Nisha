const express = require('express');
const mongooes = require("mangooes");
const Users  = new Schema({
 
    username: String,
     email: String,
     password: String,
  
  });
  const usermodel = mangooes.model("usermodel",users);
  model.export = users;