var app = angular.module('Faces_Search', ['ui.bootstrap', 'ngAnimate']);

app.controller('SearchCtrl', ['$scope',
	function($scope) {

		var $scope.userResults = ["grate"];
		var $scope.postResults = ["nash"];
		var $scope.tagsResults = ["helga"];

	}
]);