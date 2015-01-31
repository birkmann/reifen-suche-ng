"use strict";

var myApp = angular.module('myApp', [
    'ngRoute',
    'infinite-scroll'
]);

myApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider
    .when('/cart', {
        templateUrl:'templates/cart.html',
        controller: 'cartCtrl'
    })
    .when('/', {
        templateUrl:'templates/search.html',
        controller: 'searchCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});