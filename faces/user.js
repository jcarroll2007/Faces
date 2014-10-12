var app = angular.module('user', []);

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
	this.firstName;
	this.lastName;
	this.email;
	this.password;
	this.dateOfBirth;
	this.aboutUser;
	this.profilePictureUrl;
});