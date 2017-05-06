'use strict';

angular.module('myApp.main', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'main/main.html',
            controller: 'MainCtrl',
            activetab: 'main'

        });
    }])

    .controller('MainCtrl', ['$scope','$route', function($scope, $route) {
        $scope.$route = $route;
    }]);