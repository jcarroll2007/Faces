var app = angular.module('Faces_Me', []);

app.controller('MeCtrl' , ['$scope', '$window', 'user', 'post',
	function($scope, $window, user, post) {
		var w = angular.element($window);
		
		w.bind('resize', function () {
			console.log('resize');
		});

		$scope.user = user.user;

		$scope.posts = [];

		$scope.testComments = [];

		$scope.testPost = new post(user, '', 'This is my wall post', $scope.testComments);

		$scope.posts.push($scope.testPost);

		$scope.addPosts = function(posts) {
			$scope.posts.concat(posts);
		};
}]);