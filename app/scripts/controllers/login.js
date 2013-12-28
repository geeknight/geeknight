'use strict';

angular.module('geeknightApp')
  .controller('LoginCtrl', function ($scope, $rootScope, userService, angularFireAuth) {
    var url = 'https://geeknight.firebaseio.com';
    var ref = new Firebase(url);
    angularFireAuth.initialize(ref, {scope: $scope, name: 'user'});

    $scope.login = function() {
      angularFireAuth.login('github');
    };
    $scope.logout = function() {
      angularFireAuth.logout();
    };

    $scope.$on('angularFireAuth:login', function() {
      userService.user = $scope.user;
      userService.isLogged = true;
      $rootScope.$broadcast('userLogin');
    });

    $scope.$on('angularFireAuth:logout', function() {
      userService.isLogged = false;
      userService.user = null;
      $rootScope.$broadcast('userLogin');
    });
  });