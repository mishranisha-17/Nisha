const userschema = require("../model/ userSchema")    //importing model in cantroller

function getRequest(req,res,next){
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

let user ={
    username: username,
    email:email,
    password:password
}
const userdata = newusermodel(user)
userData.save().then(item=>{
    console.log(item,"added successfully");
}).catch((err)=>{
    console.log("error in adding data",err);

})

}
module.exports =RegisterUser;
