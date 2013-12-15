'use strict';

angular.module('geeknightApp').controller('ParticipateCtrl', function ($scope, userService, angularFire) {
  var url = "https://geeknight.firebaseio.com/chennai/users";
  var userBase = new Firebase(url);
  $scope.isRegistered = false;
  $scope.participants = [];

  $scope.user = userService.user;

  $scope.$on('userLogin', function () {
    $scope.user = userService.user;
  });

  $scope.participate = function () {
    $scope.participants.push(buildUser($scope.user));
    $scope.isRegistered = true;
    angularFire(userBase, $scope, 'participants');
  };

  var buildUser = function (user) {
    return {
      name: user.name,
      phone: user.phone,
      company: user.company,
      email: user.email
    }
  }
});
