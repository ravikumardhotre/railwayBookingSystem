const mongoose= require('mongoose');

const adminSchema=new mongoose.Schema({
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
        default: true
    },
  secretKey: {
    type: String,
    required: true
    
  }
  


}, {timestamps: true})

const User = mongoose.model('Admin', adminSchema);

module.exports = User;