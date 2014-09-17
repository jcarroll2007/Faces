app.factory('user' , [function() {
	user = {};

	user.authenticate = function() {
		$http(some_url, user_credentials);
	};

}]);