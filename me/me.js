var app = angular.module('Faces_Me', ['ui.bootstrap', 'ngAnimate']);
app.controller('MeCtrl' , ['$scope', '$window', 'user', 'post', '$modal',
function($scope, $window, user, post, $modal) {
$scope.user = user.user;
$scope.posts = [];
//$scope.testPost = new post(user, '', 'This is my wall post', $scope.testComments);
//$scope.posts.push($scope.testPost);
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
}]);
app.controller('newPostModalCtrl', function($scope, $modalInstance) {
$scope.post = {};
$scope.ok = function () {
console.log($scope);
$modalInstance.close($scope.post.content);
};
$scope.cancel = function () {
$modalInstance.dismiss('cancel');
};
});