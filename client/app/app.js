/**
 * Created by hkhan on 9/11/15.
 */
'use strict';

angular.module('ccApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
])

 .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider)  {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authInterceptor');
    });
