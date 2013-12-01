'use strict';

angular.module('geeknightApp').controller('ParticipateCtrl', function ($scope, userService) {
    $scope.user= userService.user;
});
