'use strict';

angular.module('NgHideShowApp', [])
	.controller('AppCtrl',['$scope', function($scope){
		$scope.showText = true;
		$scope.toggleColors1 = true;
		$scope.toggleColors2 = true;

		var showRed = true;

		$scope.toggleColor = function(){
			showRed = !showRed;
		};

		$scope.showColor = function(){
			return showRed;
		}
	}]);