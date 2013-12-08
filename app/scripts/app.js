'use strict';

angular.module('geeknightApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/_main.html',
        controller: 'MainCtrl'
      })
      .when('/participate', {
        templateUrl: 'views/_participate.html',
        controller: 'ParticipateCtrl'
      })
      .when('/talk', {
        templateUrl: 'views/_talk.html',
        controller: 'TalkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
