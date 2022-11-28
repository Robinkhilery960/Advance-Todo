const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter Heading"],
  },
  tasks: [String],
  userId: mongoose.Schema.Types.ObjectId, 
   
});

module.exports = mongoose.model("Todo", todoSchema);
