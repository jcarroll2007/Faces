var app = angular.module('User', []);

app.factory('UserService', [function() {
	return {
		post_user: function() {
			console.log('creating new user not implemented');
		},

		update_user: function(id) {
			console.log('updating user' + id  + 'not implemented');
		},

		get_user: function(uName, password) {
			console.log('Get user not implemented');
		}
	};
}]);

app.service('user', function() {
	this.firstName = "Jordan";
	this.lastName = "Carroll";
	this.email = "jcarroll2007@gmail.com";
	this.password;
	this.dateOfBirth;
	this.aboutUser;
	this.profilePictureUrl;
});