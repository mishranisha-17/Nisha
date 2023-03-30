const mongoose = require("mongoose");
const coursecategorySchema = new mongoose.Schema({

  category: {
    type: String,
    subname: ["programming", "design", "business"],
    required: true,
  },
});
const coursecategory = mongoose.model("coursecategory", coursecategorySchema);
module.exports = User;