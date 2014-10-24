angular.module('post', [user])

	.directive('post', function() {
		return {

		};
	})
	.controller('postCtrl', ['$scope', function($scope, creator) {

	}])
	.factory('post', function() {
		var post = {};

		post.creator = {
			name: creator.firstName + " " + creator.lastName,
			profilePictureUrl: creator.profilePictureUrl;			
		};
	});