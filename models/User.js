const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1024
    },
    reset: {
        code: {
            type: String,
            default: null
        },
        time: {
            type: Date,
            default: null
        }
    }
});

UserSchema.pre("save", function (next) {
    const user = this;

    bcrypt.hash(user.password, 12, function (error, encrypted) {
        user.password = encrypted;
        next();
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;