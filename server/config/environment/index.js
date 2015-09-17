'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
    if(!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

//All configurations will extend these options

var all = {

    //setting environment
    env: process.env.NODE_ENV,

    //Root Path of server
    root: path.normalize(__dirname + '/../../..'),

    //Server Port
    port: process.env.PORT || 9000,

    //Server IP
    ip: process.env.IP || '0.0.0.0',

    //Populate DB With sample date?
    seedDB: false,

    //Secret for session, youll want to change it to environment var
    secrets: {
        session: 'hkapp-session'
    },

    //List of User Roles
    userRoles: ['guest', 'user', 'admin'],

    //MongoDB connection options
    options: {
        db: {
            safe: true
        }
    },

};

//Exports the config obj based on the NODE_ENV


module.exports = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {} );


