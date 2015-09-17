/**
 * Created by hkhan on 9/14/15.
 */
var User = require('../api/user/user.model');

    User.create({
            provider: 'local',
            id: 1,
            name: 'Haroon',
            email: 'test@test.com',
            password: 'test'
        },
        {
            provider: 'CC',
            id: 2,
            name: 'Fursat',
            email: 'aqadir@csquareonline.com',
            password: 'xyz'

        },
        {
            provider: 'CC',
            id: 3,
            name: 'Arsalan',
            email: 'aansari@csquareonline.com',
            password: 'jo bhi hai'

        },
        function () {
            console.log('finished populating user');
        }
    );
