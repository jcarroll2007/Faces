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

app.service('$user', function() {

    this.user = {};

    
     // Test Code
     
    /*this.firstName = "Jordan";
    this.lastName = "Carroll";
    this.email = "jcarroll2007@gmail.com";
    this.password;
    this.city = "Atlanta";
    this.state = "GA";
    this.phone = "6782057690";
    this.gender = "Male";
    this.dateOfBirth = "06-20-1992";
    this.aboutMe = "I am a student at southern polytechnic state university studying computer science." +
    "I also work at Gergia Tech Research Institute as a student Co-op. I plan to pursue a career in software" +
    "development after I graduate.";
    this.profilePicture = "static/photos/jordancarroll.jpg";*/

    // this.user = {};
    // this.user.Email = "ryanmorris793@gmail.com";
    // this.user.Password = "123";
    // this.user.ProfilePicture = "static/photos/jordancarroll.jpg";
    // this.user.FirstName = "Jon";
    // this.user.LastName = "Doe";
    // this.user.Phone = "5554870000";
    // this.user.DateOfBirth = "1980-01-01";
    // this.user.City = "Atlanta";
    // this.user.AccountType = 1;
    // this.user.AboutMe = "user is my autobiography.";
    // this.user.Gender = "M";
    // this.user.State = "GA";
     

    /*this.firstName;
    this.lastName;
    this.email;
    this.password;
    this.city;
    this.state;
    this.phone;
    this.gender;
    this.dateOfBirth;
    this.aboutUser;
    this.profilePictureUrl;*/
});