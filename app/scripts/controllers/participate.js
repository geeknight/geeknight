'use strict';

angular.module('geeknightApp').controller('ParticipateCtrl', function ($scope, userService) {
    $scope.user= userService.user;

    $scope.$on('userLogin', function() {
        $scope.user = userService.user;
    });
});
