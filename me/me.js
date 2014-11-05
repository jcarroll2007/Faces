var app = angular.module('Faces_Me', ['ui.bootstrap', 'ngAnimate']);

app.controller('MeCtrl' , ['$scope', '$window', 'user', 'post', '$modal',
    function($scope, $window, user, post, $modal) {
        
        $scope.user = user.user;

        $scope.posts = [];
        //$scope.testPost = new post(user, '', 'This is my wall post', $scope.testComments);
        //$scope.posts.push($scope.testPost);
        $scope.newPostContent = "";

        $scope.addPosts = function(posts) {
            $scope.posts.concat(posts);
        };

        $scope.createNewPost = function (size) {

            var modalInstance = $modal.open({
              templateUrl: 'post/newPost.html',
              controller: 'newPostModalCtrl',
              size: size,
              resolve: {
                items: function () {
                  return $scope.items;
                }
              }
            });

            modalInstance.result.then(function (newPostContent) {
                console.log(newPostContent);
            });
        };

        $scope.modalOk = function() {
            modalInstance.close();
            console.log('newPostContent');
        };
}]);

app.controller('newPostModalCtrl', function($scope, $modalInstance) {
    $scope.newPostContent = "";

    $scope.test = "This is a test.";

    $scope.ok = function () {
        console.log($scope);
        $modalInstance.close($scope.newPostContent);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});