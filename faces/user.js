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

    

    
     // Test Code
     
    this.firstName = "Jordan";
    this.lastName = "Carroll";
    this.email = "jcarroll2007@gmail.com";
    this.password;
    this.city = "Atlanta";
    this.state = "GA";
    this.phone = "678-205-7690";
    this.gender = "Male";
    this.dateOfBirth = "June-20-1992";
    this.aboutMe = "I am a student at southern polytechnic state university studying computer science." +
    "I also work at Gergia Tech Research Institute as a student Co-op. I plan to pursue a career in software" +
    "development after I graduate.";
    this.profilePictureUrl = "static/photos/jordancarroll.jpg";

     
     

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