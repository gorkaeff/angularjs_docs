'use strict';

/* Controllers */

angular.module('f1App.controllers', [])
	//----------------------------------------------------------------------------------------
	.controller('IndexCtrl', function ($scope) {
		$scope.welcome = "Welcome to the F1 Ergast API with AngularJS & Bower";
	})
	//----------------------------------------------------------------------------------------
	.controller('RaceCtrl', function ($scope, RaceService) {
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
			RaceService.getRaceList(year).success(function (response) {
				$scope.raceList = response.MRData.RaceTable.Races;
				$scope.isLoadingData = false;
			});	
		};
		
		$scope.showRace({name: actualYearAPI});
	})
	//----------------------------------------------------------------------------------------
	.controller('RaceDetailCtrl', function ($log, $scope, $routeParams, RaceService) {
		$scope.isRaceExists = false;
		$scope.numRace = $routeParams.id;
		$scope.numYear = $routeParams.year;
		RaceService.getRaceDetail($scope.numRace, $scope.numYear).success(function (response) {
			$scope.totalRacesYear = response.MRData.total;
			$scope.raceDetail = response.MRData.RaceTable.Races[0];
			if ($scope.raceDetail.season != ""){
				$scope.isRaceExists = true;
			}
		});
	});