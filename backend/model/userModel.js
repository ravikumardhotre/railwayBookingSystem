const mongoose= require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phone: Number,
  


}, {timestamps: true})

const User = mongoose.model('User', userSchema);

module.exports = User;