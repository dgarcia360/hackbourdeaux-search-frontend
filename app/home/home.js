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
        var client = algoliasearch("RMCV5125OB", "4b1a378a807ba58a68bc2fff73bd6024");
        var index = client.initIndex('alias');
        
          $scope.search = {
            'query' : '',
            'hits' : []
          };
          $scope.$watch('search.query', function() {
            index.search($scope.search.query)
              .then(function searchSuccess(content) {
                // console.log(content);
                // add content of search results to scope for display in view
                let autocompleteElements = []
                for(let hit of content.hits) {
                    let elem = {};
                    elem.alias = hit.alias;
                    elem.social_accounts = hit.social_accounts;
                    autocompleteElements.push(elem);
                }
                console.log(autocompleteElements);
                $scope.search.hits = autocompleteElements;
              }, function searchFailure(err) {
                console.log(err);
            });
          });
        }]);