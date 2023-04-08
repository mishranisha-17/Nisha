const authorModel = require("../model/author Schema");

function postRequest(req,res,next){
    let authorname = req.body.authorname;
    let Id = req.body.authorId;
    let email = req.body.email;
    let password = req.body.password;

    let author = {
        authorname:authorname,
        Id:Id,
        email: email,
        password:password
    }
    const authorData =  newauthorModel(author)
    authorData.save().then(item =>{
        console.log(item,"Data added sucessfully");
}).catch((err)=>{
    console.log("adding Data is not sucessfull",err);

})

}

module.exports = postrequest