'use strict';

let app = angular.module('app', ['ui.router', 'requestToApi', 'ngMaterial', 'mdDialog'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          "view1" : {
            templateUrl : 'views/main.html',
            controller: 'appCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  });
