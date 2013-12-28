'use strict';

angular.module('geeknightApp').controller('ParticipateCtrl', function ($scope, userService, angularFire, edition) {
  var url = 'https://geeknight.firebaseio.com/chennai/Edition '+edition+'/participants';
  var userBase = new Firebase(url);
  $scope.isRegistered = false;
  $scope.participants = angularFire(userBase, $scope, 'participants');

  $scope.user = userService.user;

  $scope.$on('userLogin', function () {
    $scope.user = userService.user;
  });

  $scope.participate = function () {
    _.any($scope.participants, function () {

    });
    $scope.participants.push($scope.user);
    $scope.isRegistered = true;
    angularFire(userBase, $scope, 'participants');
  };
});
