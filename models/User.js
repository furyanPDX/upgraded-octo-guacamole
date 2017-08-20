var mongoose = require('mongoose');
const {
    Schema
} = mongoose;

var UserSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    twitchId: String
});

const User = mongoose.model('users', UserSchema);

module.exports = User;