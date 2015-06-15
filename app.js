var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	console.log('hello world');
	$scope.message = 'Howdy doody';
}]);

