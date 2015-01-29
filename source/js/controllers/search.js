'use strict';

myApp.controller('searchCtrl', function($scope, $http) {


	$scope.vehicles = [
		{ name:'Fahrzeugtyp', value:'' },
		{ name:'PKW', value:'pkw' },
		{ name:'LKW', value:'lkw' }
	];

	$scope.seasons = [
		{ name:'Jahreszeit', value:'' },
		{ name:'Sommer', value:'sommer' },
		{ name:'Winter', value:'winter' }
	];

	$scope.manufacturers = [
		{ name:'Hersteller', value:'' },
		{ name:'Bridgestone', value:'Bridgestone' },
		{ name:'Michelin', value:'Michelin' }
	];

	/*
	$scope.changeSelectVehicle = function(vehicle) {
		console.log("vehicle changed");
	};

	$scope.changeSelectSeasons = function(season) {
		console.log("season changed");
	};
	*/

	$scope.processForm = function() {

		/*
		$http({
			method  : 'POST',
			url     : 'process.php',
			data    : $.param($scope.formData),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(function(data) {
			console.log(data);
			if (!data.success) {
				$scope.errorName = data.errors.name;
				$scope.errorSuperhero = data.errors.superheroAlias;
			} else {
				$scope.message = data.message;
			}
		});
		*/

	};

});