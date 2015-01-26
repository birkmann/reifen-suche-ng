'use strict';

myApp.controller('searchCtrl', function($scope) {

	$scope.options = [
		{name:"name1", value:"value1"},
    	{name:"name2", value:"value2"},
    	{name:"name3", value:"value3",}
    ];

	$scope.vehicles = [
		{ name:'PKW', value:'val1' },
		{ name:'LKW', value:'val2' }
	];

	$scope.seasons = [
		{name:'Sommer'},
		{name:'Winter'}
	];

	$scope.changeSelectVehicle = function(vehicle) {
		console.log("vehicle changed");
	};

	$scope.changeSelectSeasons = function(season) {
		console.log("season changed");
	};

});