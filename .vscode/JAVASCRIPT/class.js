// A class is a user-defined blueprint or prototype from which we create objects
//  A constructor will have exact same name as the class and it does not have any return type at all, not even void.
// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript







class student{
    constructor(){
    //why we are using constructor in js
    this.rollNo;
    this.arrMarks;
    this.arrMarks=[1,2,3,4,5,6,7]
}
funGetrollNo(){
    return rollNo;
}

funSetrollno(rollno){
    this.rollno=rollno;
}
}

var Nisha=new student();
Nisha.funSetrollno(22)
console.log(Nisha);