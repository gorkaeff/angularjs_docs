'use strict';

/* Services */

angular.module('f1App.services', [])

.factory('SeasonService', function ($http) {
	var seasonAPI = {};

	seasonAPI.getRaceList = function (year) {
		return $http({
			method: 'GET',
			url: 'http://ergast.com/api/f1/' + year.name + '.json'
		});
	}

	return seasonAPI;
});