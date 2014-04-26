'use strict';

/* Controllers */

angular.module('f1App.controllers', [])
	
	.controller('IndexCtrl', function ($scope, SeasonService, $log) {
		//create variables for 
		var firstYearAPI = 1950;
		var actualYearAPI = new Date().getFullYear();
		
		//scope to generate values in html view
		$scope.years = [];
		$scope.isLoadingData = false;
		
		for (var i = firstYearAPI; i <= actualYearAPI; i++) {
			$scope.years.push({name : i});
		}
		
		$scope.showRace = function (year) {
			$scope.isLoadingData = true;
			SeasonService.getRaceList(year).success(function (response) {
				$scope.raceList = response.MRData.RaceTable.Races;
				$scope.isLoadingData = false;
			});	
		};
		
		$scope.showRace({name: actualYearAPI});
	});