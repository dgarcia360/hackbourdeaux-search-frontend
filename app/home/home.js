'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl',
            activetab: 'home'

        });
    }])

    .controller('HomeCtrl', ['$scope','$route', 'algolia', function($scope, $route, algolia) {


        $scope.getDatasets = function() {
            return {
                source: algolia.sources.hits(index, { hitsPerPage: 5 }),
                //value to be displayed in input control after user's suggestion selection
                displayKey: 'alias',
                //hash of templates used when rendering dataset
                templates: {
                    //'suggestion' templating function used to render a single suggestion
                    suggestion: function(suggestion) {
                        return '<span>' +
                            suggestion._highlightResult.name.value + '</span><span>' +
                            suggestion._highlightResult.team.value + '</span>';
                    }
                }
            };
        };

    }]);