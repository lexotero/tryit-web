'use strict';

var app = angular.module('ngApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/info");
	//
	// Now set up the states
	$stateProvider
		.state('info', {
			url: "/info",
			templateUrl: "partials/info.html"
		});
});