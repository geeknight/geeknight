'use strict';

angular.module('geeknightApp').controller("NavigationCtrl", function ($scope, angularFire){
	var url = "https://geeknight.firebaseio.com/chennai";
	var ref = new Firebase(url);
	angularFire(ref, $scope, 'pastEvents');

	$scope.loadEventDetails = function (selectedEvent) {
		$scope.$root.$broadcast("eventSelected", {event: selectedEvent});
	};
});