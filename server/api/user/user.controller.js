/**
 * Created by hkhan on 9/14/15.
 */
var User = require('./user.model');
var config = require('../../config/environment');


//Create a user in db
exports.create = function (req, res, next) {
    var newUser = new User(req.body);
    newUser.provider = 'local';
    newUser.role = 'user';
    newUser.save(function (err, user) {
        if(err) return validationError(res, err);
        res.json(user);
        //var token = jwt.sign({_id: user._id}, config.secrets.session, { expiresInMinutes: 60*5 });
        //res.json({ token: token });
    });
};

//GetAll

exports.getAll = function (req, res, next) {

    User.find(function (err, user) {
        if(err) return err;
        if(!user) return res.status(404).send('Not Found');
        res.json(user);
    });
};

// finding user by Object ID defined in mongoDB
exports.getSingle = function (req, res, next) {
    var userid = req.params.id;
    console.log(userid);
    User.findById(userid, function (err, user) {
        if(err) return next(err);
        if(!user) return res.status(401).send('Unathourized');
        console.log(user._id.getTimestamp());
        res.json(user);
    });
};

// Finding user by user defined ID
exports.findUser = function (req, res, next) {
    var userid = req.body;
    console.log(req.body.id);
    User.findOne({"id":userid.id}, function (err, user) {
        if (err) return next(err);

        if(!user) return res.status(404).send('Not present');

        res.json(user);
        }
    );
};

// authentication
exports.authentication = function (req, res, next) {
    var userEmail = req.body.email;
    var password = req.body.password;
    User.findOne({ "email": userEmail,
            "hashedPassword" : password }, function (err, user) {

            if(err) return next(err);

            if(!user) return res.status(404).send('No Such found');
            if(!user.hashedPassword) return res.status(400).send('Password Incorrect');
            if(!user.email) return res.status(400).send('Mail Incorrect');

            res.json(user);
        }
    );

};

