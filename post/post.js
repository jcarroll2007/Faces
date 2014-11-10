angular.module('post', [])

	.directive('wallPost', function() {
		return {
			templateUrl: 'post/post.html',
			controller: 'postCtrl',
			link: function(attrs, scope, element) {
				console.log(attrs);
			},
		};
	})

	.controller('postCtrl', ['$scope', function($scope) {

	}])

	// .factory('post', [function() {
	// 	function post(creator, imageUrl, textContent, comments, tags) {

	// 		this.creator = {
	// 			name: creator.firstName + " " + creator.lastName,
	// 			profilePictureUrl: creator.profilePictureUrl
	// 		};

	// 		this.imageUrl = imageUrl || "";

	// 		this.textContent = textContent || "";

	// 		this.comments = comments || [];

	// 		this.addComment = function(comment) {
	// 			comments.push(comment);
	// 		};
	// 	}

	// 	return post;
	// }])
	.factory('post', [function() {
		return function(creator, imageUrl, textContent, comments, tags) {

		};
	}])
	.directive('comment', function() {
		return {
			templateUrl:'post.html',
			controller: 'commentCtrl'
		};
	})

	.controller('commentCtrl', function(scope, attrs, element) {
		$scope.text = attrs.comment.textContent;
	})

	.factory('comment', [function(creator, textContent, post_id) {
		var comment = {};

		comment.creator = {
			name: creator.firstName + " " + creator.lastName
		};

		comment.textContent = textContent;

		comment.post_id = post_id;
	}]);