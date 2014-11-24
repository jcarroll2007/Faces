var app = angular.module('Faces_Me', ['ui.bootstrap', 'ngAnimate']);

app.controller('MeCtrl' , [
    '$scope', '$window', '$user', 'post', '$modal', 'WallPostService', 'FriendView', '$http', 'fileUpload',
    function($scope, $window, $user, post, $modal, WallPostService, FriendView, $http, fileUpload) {
    $scope.user = $user.user;
    $scope.posts = $user.user.Post;
    $scope.friends = $user.user.Friends;

     $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' + JSON.stringify(file));
        var uploadUrl = "http://robertryanmorris.com/services/FaceServices/api/ProfilePicture";
        fileUpload.uploadFileToUrl(file, uploadUrl, $user.user.Id);
    };

    $scope.createNewPost = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'post/newPost.html',
            controller: 'newModalCtrl',
            size: size,
        });

        modalInstance.result.then(function (newPostContent) {
            console.log(newPostContent);
            var post = {
                UserId: $scope.user.Id,
                Message: newPostContent,
                Picture: "",
                PostTime: new Date(),
                PosterId: $scope.user.Id
            };
            WallPostService.post(post).success(function(response) {
                WallPostService.getAll($scope.user.Id).success(function(data) {
                    $scope.posts = data;
                    toastr.success("Wall post created succesfully.");
                });
            });
        });
    }; //end createNewPost

    $scope.postNewPicture = function(size) {
        var modalInstance = $modal.open({
            templateUrl: 'picturePost/picturePost.html',
            controller: 'newModalCtrl',
            size: size,
        });

        modalInstance.result.then(function (newPictureContent) {
            console.log(newPictureContent);
            var newPicture = newPictureContent;
            console.log('file is ' + JSON.stringify(newPicture));
            var fd = new FormData();
            var filename = $user.user.Id + ":" + $scope.user.Id;
            fd.append(filename, newPicture);
            WallPostService.uploadPhoto(fd).success(function(response) {
                WallPostService.getAll($scope.user.Id).success(function(data) {
                    $scope.posts = data;
                    toastr.success("Wall post created succesfully.");
                });
            });
        });
    }; //end postNewPicture


    $scope.addComment = function(post) {
        var newComment = {
            CommentText: post.commentText,
            CommentDatetime: new Date(),
            UserId: $user.user.Id,
            WallId: post.Id
        };
        $http.post('http://robertryanmorris.com/services/FaceServices/api/Comments', newComment)
        .success(function(response) {
            console.log(response);
            newComment.UserFirstName = $user.user.FirstName;
            newComment.UserLastName = $user.user.LastName;
            post.Comments.push(newComment);
            post.commentText = "";
        })
        .error(function() {
            toastr.error('There was a problem communicating witht the server.');
        });
    };

    $scope.viewFriend = function(user) {
        FriendView.show(user);
    };

    /********
    editor control variables
    *********/
    $scope.fromEditOn = false;
    $scope.phoneEditOn = false;
    $scope.birthdayEditOn = false;
    $scope.aboutEditOn = false;
    ///////

    $scope.fromEditor = function(){
        $scope.fromEditOn = !$scope.fromEditOn;
    };

    $scope.phoneEditor = function(){
        $scope.phoneEditOn = !$scope.phoneEditOn;
    };

    $scope.birthdayEditor = function(){
        $scope.birthdayEditOn = !$scope.birthdayEditOn;
    };

    $scope.aboutEditor = function(){
        $scope.aboutEditOn = !$scope.aboutEditOn;
    };

    $scope.pictureEditor = function(){

    };
}]);

app.service('WallPostService', function($http) {
    this.post = function(post) {
        return $http.post('http://robertryanmorris.com/services/FaceServices/api/walls', post);
    };

    this.getAll = function(userId) {
        return $http.get('http://robertryanmorris.com/services/FaceServices/api/walls' + '/' + userId);
    };

    this.uploadPhoto = function(post) {
        return $http.post('http://localhost:49517/api/WallPicture', post, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
    });
    };
});

app.controller('newModalCtrl', function($scope, $modalInstance) {
    $scope.post = {};

    $scope.ok = function () {
        console.log($scope);
        $modalInstance.close($scope.post.content);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});