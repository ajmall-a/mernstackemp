const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    Name:String,
    Designation:String,
    Location:String,
    Salary:Number
})
  
    
    const postModel = mongoose.model("post", Schema);
    module.exports = postModel;


