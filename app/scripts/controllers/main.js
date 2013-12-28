'use strict';

angular.module('geeknightApp')
  .controller('MainCtrl', function ($scope) {
      $scope.tabs = ['When', 'Where', 'What'];
      $scope.selectedTabIndex = 0;
      $scope.when = true;

      $scope.$on('eventSelected', function (event, args){
		    $scope.event = args.event;
      });

      $scope.switchTab = function(index) {
		    $scope[$scope.tabs[$scope.selectedTabIndex].toLowerCase()] = false;
		    $scope[$scope.tabs[index].toLowerCase()] = true;
		    $scope.selectedTabIndex = index;
      };
    });