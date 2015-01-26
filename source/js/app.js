"use strict";

var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(function ($routeProvider) {
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
});