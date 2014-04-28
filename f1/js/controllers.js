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
	.controller('RaceDetailCtrl', function ($scope, $routeParams, RaceService, $log) {
		$scope.isRaceExists = false;
		$scope.isRace = true;
		$scope.isQualifying = false;
		$scope.isPitstop = false;
		$scope.isStanding = false;
		$scope.standingDriver= true;
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
		
		RaceService.getDriverStandings($scope.numRace, $scope.numYear).success(function (response){
			$scope.driverStanding = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			$log.log($scope.driverStanding);
		});

		RaceService.getConstructorStandings($scope.numRace, $scope.numYear).success(function (response){
			$scope.constructorStanding = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
		});
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
	.controller('ConstructorCtrl', function ($scope, ConstructorService) {
		$scope.isLoadingData = true;
		
		ConstructorService.getConstructorList(30,0).success(function (response){
			$scope.constructorLimit1 = response.MRData.ConstructorTable.Constructors;
		});
		
		ConstructorService.getConstructorList(30,30).success(function (response){
			$scope.constructorLimit2 = response.MRData.ConstructorTable.Constructors;
		});
		
		ConstructorService.getConstructorList(30,60).success(function (response){
			$scope.constructorLimit3 = response.MRData.ConstructorTable.Constructors;
		});
		
		ConstructorService.getConstructorList(30,90).success(function (response){
			$scope.constructorLimit4 = response.MRData.ConstructorTable.Constructors;
		});
		
		ConstructorService.getConstructorList(30,120).success(function (response){
			$scope.constructorLimit5 = response.MRData.ConstructorTable.Constructors;
		});
		
		ConstructorService.getConstructorList(30,150).success(function (response){
			$scope.constructorLimit6 = response.MRData.ConstructorTable.Constructors;
		});
		
		ConstructorService.getConstructorList(30,180).success(function (response){
			$scope.constructorLimit7 = response.MRData.ConstructorTable.Constructors;
			$scope.isLoadingData = false;
		});
		
	});