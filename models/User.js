const mongoose = require('mongoose');
var uuid = require('uuid');

var userSchema = new mongoose.Schema({
    userId: {
        type: String,
        default:uuid.v4()
    },
    name: {
        type: String
    }
});

var user=mongoose.model('user', userSchema);
module.exports=user