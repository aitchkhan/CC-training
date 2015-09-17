/**
 * Created by hkhan on 9/14/15.
 */
'use strict';

// User model for MongoDB and methods written in mongoose

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

//Schema for user
var UserSchema = new Schema({
    name: String,
    email: { type: String, lowercase: true },
    role: {
        type: String,
        default: 'user'
    },
    hashedPassword: String,
    provider: String,
    salt: String
});

module.exports = mongoose.model('User', UserSchema);


