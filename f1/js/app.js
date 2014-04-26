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
	
	$routeProvider.when('/index', 
		{templateUrl: 'modules/ui.index/indexFormula1.html', controller: 'IndexCtrl'}
	);
	
	$routeProvider.otherwise({redirectTo: '/index'});
}]);