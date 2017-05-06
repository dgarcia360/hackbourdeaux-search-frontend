'use strict';

angular.module('myApp.register', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'register/register.html',
            controller: 'RegisterCtrl',
            activetab: 'register'

        });
    }])

    .controller('RegisterCtrl', ['$scope','$route', function($scope, $route) {
        $scope.step = 1;

        $scope.formData = {};

        $scope.selectedSocialNetworks = [];

        $scope.alreadyPressed = {
            'facebook': false,
            'twitter':false,
            'github': false,
            'instagram':false,
            'bitcoin': false,
            'nem': false
        };

        $scope.changeFormView = function(id){
            $scope.step = id;
            console.log($scope.step);
        };

        $scope.addRow = function(socialNetwork){
            if (!$scope.alreadyPressed[socialNetwork]){

                $scope.alreadyPressed[socialNetwork] = true;

                $scope.selectedSocialNetworks.push({
                    name: socialNetwork,
                    alias: ''});
            }
        };

    }]);