'use strict';

/* Services */

angular.module('f1App.services', [])

.factory('ConfigService', function () {
	var configAPI = {};
	
	configAPI.getUrlApp = function () {
		return 'http://ergast.com/api/f1';
	};
	
	return configAPI;
})

.factory('RaceService', function ($http, ConfigService) {
	var raceAPI = {};

	raceAPI.getRaceList = function (year) {
		return $http({
			method: 'GET',
			url: ConfigService.getUrlApp() + "/" + year.name + '.json'
		});
	};
	
	raceAPI.getRaceDetail = function (idRace, yearRace) {
		return $http({
			method: 'GET',
			url: ConfigService.getUrlApp() + "/" + yearRace + '/' + idRace + '/results.json'
		});
	};
	
	raceAPI.getQualifyingDetail = function (idRace, yearRace) {
		return $http({
			method: 'GET',
			url: ConfigService.getUrlApp() + "/" + yearRace + '/' + idRace + '/qualifying.json'
		});
	};
	
	raceAPI.getPitsStop = function (idRace, yearRace) {
		return $http({
			method: 'GET',
			url: ConfigService.getUrlApp() + "/" + yearRace + '/' + idRace + '/pitstops.json'
		});
	};
	
	raceAPI.getDriverStandings = function (idRace, yearRace) {
		return $http({
			method: 'GET',
			url: ConfigService.getUrlApp() + "/" + yearRace + '/' + idRace + '/driverStandings.json'
		});
	};
	
	raceAPI.getConstructorStandings = function (idRace, yearRace) {
		return $http({
			method: 'GET',
			url: ConfigService.getUrlApp() + "/" + yearRace + '/' + idRace + '/constructorStandings.json'
		});
	};

	return raceAPI;
})

.factory('DriverService', function ($http, ConfigService) {
	var driverAPI = {};

	driverAPI.getDriverList = function (year) {
		return $http({
			method: 'GET',
			url: ConfigService.getUrlApp() + "/" + year.name + '/drivers.json'
		});
	};
	
	return driverAPI;
})

.factory('ConstructorService', function ($http, ConfigService) {
	var constructorAPI = {};

	constructorAPI.getConstructorList = function (limit, offset) {
		return $http({
			method: 'GET',
			url: ConfigService.getUrlApp() + "/constructors.json?limit=" + limit + "&offset=" + offset
		});
	};
	
	return constructorAPI;
});

