'use strict';

angular.module('geeknightApp').controller('ParticipateCtrl', function ($scope, userService, angularFire, edition) {
  var url = 'https://geeknight.firebaseio.com/chennai/Edition '+edition+'/participants';
  var userBase = new Firebase(url);
  $scope.participants = angularFire(userBase, $scope, 'participants');
  $scope.isRegistered = false;
  $scope.user = userService.user;

  $scope.$on('userLogin', function () {
    $scope.user = userService.user;
    if($scope.user) {
      $scope.isRegistered = isAlreadyRegistered();
    }
  });

  $scope.newRegistration = function () {
    $scope.user = null;
    $scope.newParticipant = null;
    $scope.isRegistered = false;
  };

  $scope.participate = function () {
    var isRegistered = isAlreadyRegistered();
    if (!isRegistered) {
      $scope.newParticipant = buildParticipant($scope.user);
      angularFire(userBase, $scope, 'newParticipant');
    }
    $scope.isRegistered = true;
  };

  var buildParticipant = function (user) {
    return [{
      name: user.name,
      phone: user.phone,
      email: user.email,
      company: user.company
    }];
  };

  var isAlreadyRegistered = function () {
    var properties = ['company','email','phone','name'];
    return _.any($scope.participants, function (participant) {
      var alreadyRegistered = true;
      _.each(properties, function (property) {
        alreadyRegistered = alreadyRegistered && ($scope.user[property].toLowerCase() === participant[property].toLowerCase());
      });
      return alreadyRegistered;
    });
  };
});
