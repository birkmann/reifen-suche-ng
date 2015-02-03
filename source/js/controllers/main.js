'use strict';

myApp.controller('mainCtrl', function($scope, $http) {


	$scope.vehicles = [
		{ name:'Fahrzeugtyp', value:'all' },
		{ name:'PKW', value:'PKW' },
		{ name:'Motorrad', value:'Motorrad' },
		{ name:'Offroad', value:'Offroad' },
		{ name:'LKW', value:'LKW' },
		{ name:'LLKW', value:'LLKW' }
	];

	$scope.seasons = [
		//{ name:'Alle', value:'all' },
		{ name:'Sommer', value:'s' },
		{ name:'Winter', value:'w' },
		//{ name:'Ganzjahres', value:'g' }
	];

	$scope.manufacturers = [
		{ name:'Hersteller', value:'all' },
		{ name:'BF Goodrich', value:'BF Goodrich' },
		{ name:'Bridgestone', value:'Bridgestone' },
		{ name:'Continental', value:'Continental' },
		{ name:'Dunlop', value:'Dunlop' },
		{ name:'Falken', value:'Falken' },
		{ name:'Firestone', value:'Firestone' },
		{ name:'Goodyear', value:'Goodyear' },
		{ name:'Hankook', value:'Hankook' },
		{ name:'Michelin', value:'Michelin' },
		{ name:'Pirelli', value:'Pirelli' },
		{ name:'Vredestein', value:'Vredestein' },
		{ name:'Yokohama', value:'Yokohama' }
	];

	$scope.speeds = [
		{ name:'Geschwindigkeitsindex', value:'all' },
		{ name:'B (bis 50 km/h)', value:'B' },
		{ name:'E (bis 70 km/h)', value:'E' },
		{ name:'F (bis 80 km/h)', value:'F' },
		{ name:'G (bis 90 km/h)', value:'G' },
		{ name:'H (bis 210 km/h)', value:'H' },
		{ name:'J (bis 100 km/h)', value:'J' },
		{ name:'K (bis 110 km/h)', value:'K' },
		{ name:'L (bis 120 km/h)', value:'L' },
		{ name:'M (bis 130 km/h)', value:'M' },
		{ name:'N (bis 140 km/h)', value:'N' },
		{ name:'P (bis 150 km/h)', value:'P' },
		{ name:'Q (bis 160 km/h)', value:'Q' },
		{ name:'R (bis 170 km/h)', value:'R' },
		{ name:'S (bis 180 km/h)', value:'S' },
		{ name:'T (bis 190 km/h)', value:'T' },
		{ name:'V (bis 240 km/h)', value:'V' },
		{ name:'W (bis 270 km/h)', value:'W' },
		{ name:'Y (bis 300 km/h)', value:'Y' }
	];

	$scope.widths = [
		{ name:'175', value:'175' },
		{ name:'185', value:'185' },
		{ name:'195', value:'195' },
		{ name:'195', value:'195' },
		{ name:'205', value:'205' },
		{ name:'215', value:'215' },
		{ name:'225', value:'225' }
	];

	$scope.heights = [
		{ name:'45', value:'45' },
		{ name:'50', value:'50' },
		{ name:'55', value:'55' },
		{ name:'60', value:'60' },
		{ name:'65', value:'65' }
	];

	$scope.rims = [
		{ name:'15', value:'15' },
		{ name:'16', value:'16' },
		{ name:'17', value:'17' }
	];


	$scope.processForm = function() {

		$http({
			method : 'POST',
			url : 'process.php',
			data: {
				vehicle: $scope.vehicle,
				season: $scope.season,
				manufacturer: $scope.manufacturer,
				speed: $scope.speed,
				width: $scope.width,
				height: $scope.height,
				rim: $scope.rim
			},
			headers : {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data, status) {
			$scope.results = data;

			//var data_encoded = $.param(data);
			//console.log(data_encoded);

			window.scrollTo(0, 500);
		});

	};


	$scope.getHits = function() {

		$http({
			method : 'POST',
			url : 'process.php',
			data: {
				vehicle: $scope.vehicle,
				season: $scope.season,
				manufacturer: $scope.manufacturer,
				speed: $scope.speed,
				width: $scope.width,
				height: $scope.height,
				rim: $scope.rim
			},
			headers : {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data, status) {
			$scope.hits = Object.keys(data).length;
			return $scope.hits;
		});

	};

	$scope.searchChanged = function() {
		$scope.getHits();
	};



});