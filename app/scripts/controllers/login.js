'use strict';

angular.module('geeknightApp')
  .controller('LoginCtrl', function ($scope, userService, angularFireAuth) {
    var url = "https://geeknight.firebaseio.com";
    var ref = new Firebase(url)
    angularFireAuth.initialize(ref, {scope: $scope, name: "user"});

    $scope.login = function() {
        angularFireAuth.login("github");
    };
    $scope.logout = function() {
        angularFireAuth.logout();
    };

    $scope.$on("angularFireAuth:login", function(evt, user) {
      userService.user = $scope.user;
      userService.isLogged = true;
    });

    $scope.$on("angularFireAuth:logout", function(evt) {
      userService.isLogged = false;
      userService.user = null;
    });
});

