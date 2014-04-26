'use strict';

/* App Configurations */

angular.module('f1App', [
	'ngRoute',
	'f1App.filters',
	'f1App.services',
	'f1App.directives',
	'f1App.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/index', {templateUrl: 'modules/ui.index/indexFormula1.html', controller: 'IndexCtrl'});
	$routeProvider.when('/races', {templateUrl: 'modules/ui.race/raceList.html', controller: 'RaceCtrl'});
	$routeProvider.when('/race/:id/:year', {templateUrl: 'modules/ui.race/raceDetail.html', controller: 'RaceDetailCtrl'});
	$routeProvider.otherwise({redirectTo: '/index'});
}]);