/**
 * Created by hkhan on 9/11/15.
 */

// Main application routes go here

var errors = require('./components/errors');
var path = require('path');

module.exports = function (app) {

    //Insert routes below
    app.use('/api/users', require('./api/user'));

   // app.use('/auth', require('./auth'));

    //All undefined routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    //All other routes should redirect to index.html

    app.route('/*')
        .get(function (req, res) {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        });
};