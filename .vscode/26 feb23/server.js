const express = require("express");
const app = express();
port = 9000;
//url, body, Method
//url =route, parameter
//127.0.0.1/courses/1
students = [
  { name: "sahil", age: 30 },
  {
    name: " ammar",
    age: 30,
  },
  {
    name: "karnika",
    age: 30,
  },
];

//get all the details of the students
app.get("/students", function (req, res) {
  res.send(students);
});
//geting the data for only ammar
// app.get("students/:name", function (req, res) {
//     let a =students.find( students.name == "ammar");
//     res.send(students.a);
// });
app.listen(port, () => {
  console.log("Server is running on ", port);
});