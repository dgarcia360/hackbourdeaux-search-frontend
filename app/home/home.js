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
        $scope.$route = $route;

        var client = algoliasearch('RMCV5125OB', '4b1a378a807ba58a68bc2fff73bd6024');
        var index = client.initIndex('alias');


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