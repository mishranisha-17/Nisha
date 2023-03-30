const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    name: String,
    required: true,
  },
  category: {
    type: String,
    subname: ["programming", "design", "business"],
    required: true,
  },
  
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
