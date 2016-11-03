'use strict';
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider.
        when('/', {
            templateUrl : '../static/partials/splash.html'
        }).
        when('/about', {
             templateUrl : '../static/partials/about.html'
        }).
        when('/cities', {
             templateUrl : '../static/partials/table.html',
             controller : 'TableCtrl',
             resolve: {
                model: function ($route) { $route.current.params.model = "city"; }
    		}
        }).
        when('/universities', {
             templateUrl : '../static/partials/table.html',
             controller : 'TableCtrl',
             resolve: {
                model: function ($route) { $route.current.params.model = "university"; }
    		}
        }).
        when('/majors', {
             templateUrl : '../static/partials/table.html',
             controller : 'TableCtrl',
             resolve: {
                model: function ($route) { $route.current.params.model = "major"; }
    		}
        }).
        when('/ethnicities', {
             templateUrl : '../static/partials/table.html',
             controller : 'TableCtrl',
             resolve: {
                 model: function ($route) { $route.current.params.model = "ethnicity"; }
    		}
        }).
        otherwise({
            redirectTo: '/'
        });

});

myApp.controller('TableCtrl',function($scope, $routeParams, $http, $location) {
  $scope.path = '/api/'
  $scope.urlPath = $routeParams.model;
  $scope.path = $scope.path + $scope.urlPath;

  $scope.order = 'asc';
  $scope.query = function() {
    if($scope.order = 'asc')
      $scope.order = 'desc';
    else
      $scope.order = 'asc';
    
    $scope.path += '?sort=' + $scope.urlPath + '&order=' + $scope.order;
    
    $http.get($scope.path).success(function (data, status, headers, config) {
      $scope.myData = data.results;
    });
  }

  $http.get($scope.path).success(function (data, status, headers, config) {
    $scope.myData = data.results;
  });
});
