'use strict';

/* Controllers */

angular.module('f1App.controllers', [])
	//----------------------------------------------------------------------------------------
	.controller('IndexCtrl', function ($scope) {
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
			$scope.evaluatedYear = year;
			$scope.isLoadingData = true;
			RaceService.getRaceList(year).success(function (response) {
				$scope.raceList = response.MRData.RaceTable.Races;
				$scope.isLoadingData = false;
			});	
		};
		
		$scope.showRace({name: actualYearAPI});
	})
	//----------------------------------------------------------------------------------------
	.controller('RaceDetailCtrl', function ($scope, $routeParams, RaceService) {
		$scope.isRaceExists = false;
		$scope.isRace = true;
		$scope.isQualifying = false;
		$scope.isPitstop = false;
		$scope.numRace = $routeParams.id;
		$scope.numYear = $routeParams.year;
		
		RaceService.getRaceDetail($scope.numRace, $scope.numYear).success(function (response) {
			$scope.totalRacesYear = response.MRData.total;
			$scope.raceDetail = response.MRData.RaceTable.Races[0];
			if ($scope.raceDetail.season != ""){
				$scope.isRaceExists = true;
			}
		});
		
		RaceService.getQualifyingDetail($scope.numRace, $scope.numYear).success(function (response){
			$scope.qualifying = response.MRData.RaceTable.Races[0];
		});
		
		RaceService.getPitsStop($scope.numRace, $scope.numYear).success(function (response){
			$scope.pitStops = response.MRData.RaceTable.Races[0];
		});
	})
	//----------------------------------------------------------------------------------------
	.controller('StandingCtrl', function ($scope) {

	})
	//----------------------------------------------------------------------------------------
	.controller('DriverCtrl', function ($scope, DriverService) {
		//create variables for 
		var firstYearAPI = 1950;
		var actualYearAPI = new Date().getFullYear();
		
		//scope to generate values in html view
		$scope.years = [];
		$scope.isLoadingData = false;
		
		for (var i = firstYearAPI; i <= actualYearAPI; i++) {
			$scope.years.push({name : i});
		}
		
		$scope.showDrivers = function (year) {
			$scope.evaluatedYear = year;
			$scope.isLoadingData = true;
			DriverService.getDriverList(year).success(function (response) {
				$scope.driverList = response.MRData.DriverTable.Drivers;
				$scope.isLoadingData = false;
			});	
		};
		
		$scope.showDrivers({name: actualYearAPI});
	})
	//----------------------------------------------------------------------------------------
	.controller('DriverDetailCtrl', function ($scope) {

	})
	//----------------------------------------------------------------------------------------
	.controller('ConstructorCtrl', function ($scope) {

	});