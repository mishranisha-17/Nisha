const courseCSchema = require("../model/courseCSchema");

function postRequest(req,res,next){
    let courseCname = req.body.courseCname;
    let Id = req.body.courseCId;
    

    let courseC = {
        courseCname:courseCname,
        Id:Id,
        
    }
    const courseCData =  newcourseModel(courseC)
    courseCData.save().then(item =>{
        console.log(item," Data added sucessfully");
}).catch((err)=>{
    console.log("adding Data is not sucessfull",err);

})

}

module.exports = postrequest