'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'puigcerber.countryPicker',
    'algoliasearch',
    'ngSanitize',
    'algolia.autocomplete',
    'myApp.main',
    'myApp.home',
    'myApp.register',
    'myApp.version',

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.otherwise({redirectTo: '/'});
}]);
