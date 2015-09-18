/**
 * Created by hkhan on 9/18/15.
 */
'use strict';

angular.module('CC-training')
    .config(function ($stateProvider) {
        $stateProvider
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/account/signup/signup.html',
                controller: 'SignupCtrl'
            });
    });