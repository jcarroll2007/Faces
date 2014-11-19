var myApp = angular.module('tests', []);

myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);



myApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl, userId){
        var fd = new FormData();
        var filename = userId;
        fd.userId = userId;
        fd.append(filename, file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(response){
            toastr.success('Profile picture updated successfully. You may need to restart your browser in order for the change to apply.')
        })
        .error(function(){
        });
    };
}]);


myApp.service('getImage', ['$http', function($http){

    this.getFileFromPath = function(imagePath){
        var iPath = "D:\\Hosting\\11030611\\html\\services\\faceservices\\App_Data\\profile\\customeImageName.jpeg";
        $http.get(imagePath, {
            params: {
                path: iPath
            }
        }).success(function (data,status){

        });
    };
}]);


myApp.controller('TestsCtrl', [
    '$scope', 'fileUpload', '$http', 'getImage', '$user',
    function($scope, fileUpload, $http, getImage, $user){
    $http.get('http://robertryanmorris.com/services/FaceServices/api/ProfilePicture', {path: 'D:/Hosting/11030611/html/services/faceservices/App_Data/profile/1.jpeg'})
    .success(function(response) {
        $scope.picture = response;
        console.log(response);
    });
    $scope.picture = "";

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' + JSON.stringify(file));
        var uploadUrl = "http://robertryanmorris.com/services/FaceServices/api/ProfilePicture";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };


    $scope.getImage = function(){
        var imagePath = "http://robertryanmorris.com/services/FaceServices/api/ProfilePicture";
        getImage.getFileFromPath(imagePath);
    };

    var testUser = {};
    testUser.Email = "ryanmorris793@gmail.com";
    testUser.Password = "123";
    testUser.ProfilePicture = "static/photos/jordancarroll.jpg";
    testUser.FirstName = "Jon";
    testUser.LastName = "Doe";
    testUser.Phone = "5554870000";
    testUser.DateOfBirth = "1980-01-01";
    testUser.City = "Atlanta";
    testUser.AccountType = 1;
    testUser.AboutMe = "user is my autobiography.";
    testUser.Gender = "M";
    testUser.State = "GA";
    $scope.loginTestUser = function() {
        $user.user = testUser;
    };

}]);

/*
var app = angular.module('tests', []);

app.controller('TestsCtrl', ['test_web_services', '$scope','$upload' , function(test_web_services, $scope, $upload) {
    $scope.test_login = function() {
        test_web_services.test_login();
    };

    $scope.test_create_new_user = function() {
        test_web_services.add_test_user();
    };

    $scope.test_picture_upload = function(file) {
        test_web_services.onFileSelect();
    }
}]);


app.factory('test_web_services', ['$http', function($http) {
    var test_web_services = {};

    var new_user_info = {
        Email: "ryanmorris793@gmail.com",
        Password: "123",
        //ProfilePicture: null,
        firstname: "Jon",
        lastname: "Doe",
        Phone: "5554870000",
        DateOfBirth: "1980-01-01", // 04/03/1984
        City: "Atlanta",
        AccountType: 1,
        AboutMe: "This is my autobiography.",
        Gender: "M",
        State: "GA"
    };


    var login_data = {
        uname: "ryanmorris793@gmail.com",
        pass:"123"
    };

    test_web_services.test_login = function() {
        $http.post('http://localhost:49517/api/Login', login_data)
        .success(function(received) {
            alert('Login Test Successful:' + received);
        });
    };

    test_web_services.add_test_user = function() {
        console.log(new_user_info);
        $http.post('http://robertryanmorris.com/services/FaceServices/api/Users', new_user_info)
        .success(function(received) {
            alert('Add user test Successful:' + received);
        });
    };


    test_web_services.onFileSelect = function(file) {
        var fd = new FormData();
        fd.append("file", file);
        $http.post('http://localhost:49517/api/ProfilePicture', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined }
        })};



    return test_web_services;
}]);
*/