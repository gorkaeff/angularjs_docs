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

	return raceAPI;
});