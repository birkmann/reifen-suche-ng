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


	$scope.processForm = function() {

		$http({
			method : 'POST',
			url : 'process.php',
			headers : {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data, status) {
			$scope.results = data;
        });

	};

});