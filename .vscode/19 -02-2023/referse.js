const user={
    name: "Nisha",
    class: "batch 7",
    email: "nisha@gmail.com",
    address: {
        city: "noida",
        state: "UP",
        zip: "140",

    },
    work: function(workplace){
        console.log("Nisha work in", +"workplace");
    },
};
console.log(user);
console.log(user.name);
console.log(user.address.city);
user.work("gurgaon");
//http.open("get","url")
//function user(name,city,class,email)
//user("shreya","delhi","9",abc@gmail.com)

student={
    name:"nisha",
    hobby:function(){
        console.log("student plays,hobby")
    }
}
class student{
    constructor(name){
        this.name=name;
    }
    name="nisha"
    // function hobby(){
    //     console.log("this is student hobby")

    // }

}
const student=new student("nisha");
console.log(student.name)
const student=new student("shreya");
console.log(student1.name)
