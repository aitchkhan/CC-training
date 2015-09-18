/**
 * Created by hkhan on 9/17/15.
 */
angular.module('CC-training')
    .controller('SignupCtrl', function ($scope, $location) {
        $scope.user = {};
        $scope.errors = {};
        $scope.register = function(form) {
            if(form.$valid) {

            }

        };
    });