const { Message } = require('@material-ui/icons');
const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            // Only works on Create/Save
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords are not the same'
        }
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;