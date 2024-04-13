const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName: String,
    LastName: String,
    Address: String,
    Username: String,
    Password:  String
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;