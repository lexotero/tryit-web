'use strict';

var app = angular.module('ngApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/info");
	//
	// Now set up the states
	$stateProvider
		.state('info', {
			url: "/info",
			templateUrl: "partials/info.html"
		})
		.state('tickets', {
			url: "/tickets",
			templateUrl: "partials/tickets.html"
		})
		.state('calendar', {
			url: "/calendar",
			templateUrl: "partials/calendar.html"
		})
		.state('contact', {
			url: "/contact",
			templateUrl: "partials/contact.html"
		})
		.state('lastEditions', {
			url: "/lastEditions",
			templateUrl: "partials/last_editions.html"
		});
});

var editions = [
	{
		day: "Dia 1",
		sessions: [
			{
				title: "Por qué hoy la computación cognitiva. Cómo entendemos la computación cognitiva",
				description: "La posibilidad de que los sistemas amplíen las capacidades humanas en el área de la toma de decisiones, se ha convertido en una realidad. Es viable la implantación de sistemas que ayuden en este proceso, participando de él , no sustituyendo al ser humano.Evaluamos los diferentes enfoques actuales comerciales dentro del mundo de los sistemas cognitivos , y explicamos las diferencias en las aproximaciones. Nos centramos un poco más en el caso de Watson.",
				start_date: "2015-10-10",
				speakers: [
					{
						name: "Jorge Luis",
						bio: "IBM Executive architect, in the CTO role defines and executes the technical strategy of the Enterprise business unit (EBU), according it with the heads of the different organizations to ensure proper alignment of technical resources within the territory.\nC-level technical advisor at selected customers within the territory",
						picture: "images/Imagen1.png"
					},
					{
						name: "Jorge Luis",
						bio: "IBM Executive architect, in the CTO role defines and executes the technical strategy of the Enterprise business unit (EBU), according it with the heads of the different organizations to ensure proper alignment of technical resources within the territory.\nC-level technical advisor at selected customers within the territory",
						picture: "images/logo.png"
					}
				]
			},
			{
				title: "Charla 2",
				description: "Descripcion de charla 2.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 3",
				description: "Descripción con varias lineas.\r\nLinea 2.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 4 slsldifn sd kjd i  diddlkjañlfj isef4",
				description: "Las Tecnologías de la Información y la Comunicación (TIC) son un elemento clave para el desarrollo de ventajas competitivas de las empresas.<br>Durante la sesión se repasarán las últimas tendencias en materia de plataformas y arquitecturas, bases de datos, lenguajes de programación,… y como todo esto se está llevando a la aplicación práctica de forma innovadora en campos como la movilidad, la automatización de procesos o la articulación de contenidos. La sesión tiene también el objetivo de presentar la relevancia y los diferentes ámbitos de aplicación de la gestión del riesgo y la seguridad en los sistemas de información. Además se repasarán los diferentes estándares, métodos, herramientas y legislación concebidas para minimizar los posibles riesgos a la infraestructura o a la información",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 5",
				description: "Descripcion de charla 3 ñaksfjñaskdjfñaksjhfdñaskdf.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 6",
				description: "Descripcion de charla 3.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 7",
				description: "Descripcion de charla 3.",
				start_date: "2015-10-10"
			}
		]
	},
	{
		day: "Dia 2",
		sessions: [
			{
				title: "Charla 1",
				description: "Descripcion de charla 1 ñaskfj ñaslfdkj añsfldkja sñdlfkjañsdlfkj añlsdkfj s.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 2",
				description: "Descripcion de charla 2.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 3",
				description: "Descripcion de charla 3.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 4 slsldifn sd kjd i  diddlkjañlfj isef4",
				description: "Las Tecnologías de la Información y la Comunicación (TIC) son un elemento clave para el desarrollo de ventajas competitivas de las empresas.<br>Durante la sesión se repasarán las últimas tendencias en materia de plataformas y arquitecturas, bases de datos, lenguajes de programación,… y como todo esto se está llevando a la aplicación práctica de forma innovadora en campos como la movilidad, la automatización de procesos o la articulación de contenidos. La sesión tiene también el objetivo de presentar la relevancia y los diferentes ámbitos de aplicación de la gestión del riesgo y la seguridad en los sistemas de información. Además se repasarán los diferentes estándares, métodos, herramientas y legislación concebidas para minimizar los posibles riesgos a la infraestructura o a la información",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 5",
				description: "Descripcion de charla 3 ñaksfjñaskdjfñaksjhfdñaskdf.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 6",
				description: "Descripcion de charla 3.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 7",
				description: "Descripcion de charla 3.",
				start_date: "2015-10-10"
			}
		]
	},
	{
		day: "Dia 3",
		sessions: [
			{
				title: "Charla 1",
				description: "Descripcion de charla 1 ñaskfj ñaslfdkj añsfldkja sñdlfkjañsdlfkj añlsdkfj s.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 2",
				description: "Descripcion de charla 2.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 3",
				description: "Descripcion de charla 3.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 4 slsldifn sd kjd i  diddlkjañlfj isef4",
				description: "Las Tecnologías de la Información y la Comunicación (TIC) son un elemento clave para el desarrollo de ventajas competitivas de las empresas.<br>Durante la sesión se repasarán las últimas tendencias en materia de plataformas y arquitecturas, bases de datos, lenguajes de programación,… y como todo esto se está llevando a la aplicación práctica de forma innovadora en campos como la movilidad, la automatización de procesos o la articulación de contenidos. La sesión tiene también el objetivo de presentar la relevancia y los diferentes ámbitos de aplicación de la gestión del riesgo y la seguridad en los sistemas de información. Además se repasarán los diferentes estándares, métodos, herramientas y legislación concebidas para minimizar los posibles riesgos a la infraestructura o a la información",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 5",
				description: "Descripcion de charla 3 ñaksfjñaskdjfñaksjhfdñaskdf.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 6",
				description: "Descripcion de charla 3.",
				start_date: "2015-10-10"
			},
			{
				title: "Charla 7",
				description: "Descripcion de charla 3.",
				start_date: "2015-10-10"
			}
		]
	}
];

app.controller('tabEditionsController', function ($scope) {
	$scope.tabSelected = 1;

	$scope.setTab = function (tab) {
		$scope.tabSelected = tab;
	};

	$scope.isSelected = function (tab) {
		return $scope.tabSelected === tab;
	};
});

app.controller('lastEditionsController', function ($scope) {
	$scope.editions = editions;
	$scope.sessionActive;

	$scope.clickSession = function (session) {
		$scope.sessionActive = session;
		$('#modal').openModal();
	}
});

