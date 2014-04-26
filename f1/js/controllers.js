'use strict';

/* Controllers */

angular.module('f1App.controllers', [])
	
	.controller('IndexCtrl', function ($scope, SeasonService) {
		var year = 2014;
		SeasonService.getRaceList(year).success(function (response){
			$scope.raceList = response.MRData.RaceTable.Races; 
		});
	});