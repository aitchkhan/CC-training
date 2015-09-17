/**
 * Created by hkhan on 9/14/15.
 */
'use strict';

var should = require('should');
var app = require('../../app');
var User = require('./user.model');

var user = new User({
    provider: 'local',
    name: 'Fake User',
    password: 'delicate',
    email: 'hkhan@creative.co'
});

describe('User Model', function () {
    before(function (done) {
        //Clear User before Testing

        User.remove().exec().then(function () {
            done();
        });
    });
});