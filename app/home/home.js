'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl',
            activetab: 'home'

        });
    }])

    .controller('HomeCtrl', ['$scope','$route', function($scope, $route) {
        $scope.$route = $route;
    }]);