var app = angular.module('Faces', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'angularFileUpload',
    'Faces_Login',
    'Faces_Register',
    'Faces_Me',
    'tests',
    'User',
    'post'
    ]);



app.constant('URLs', {
    LOGIN: "/login",
    REGISTER: "/register",
    TESTS: "/tests",
    ME: "/me",
    SEARCH: "/search",
    FRIEND: "/friend"
});

app.config(['$routeProvider', 'URLs',
    function($routeProvider, URLs) {
        $routeProvider.
        when(URLs.LOGIN, {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        }).
        when(URLs.REGISTER, {
            templateUrl: 'register/register.html',
            controller: 'RegisterCtrl'
        }).
        when(URLs.TESTS, {
            templateUrl: 'tests/tests.html',
            controller: 'TestsCtrl'
        }).
        when(URLs.ME, {
            templateUrl: 'me/me.html',
            controller: 'MeCtrl'
        }).
        when(URLs.SEARCH, {
            templateUrl: 'search/search.html',
            controller: 'SearchCtrl'
        }).
        when(URLs.FRIEND, {
            templateUrl: 'friend/friend.html',
            controller: "FriendsCtrl"
        }).
        otherwise({
            redirectTo: URLs.LOGIN
        });
}]);

app.factory('routing', ['$location', function($location) {
    var routing = {};

    routing.change_view = function(url) {
        $location.path(url);
    };

    return routing;
}]);

app.controller('FacesCtrl', ['$scope', '$window', '$modal', '$user', '$interval',
    function($scope, $window, $modal, $user, $interval){
        $scope.searchContent = "";
        $scope.activeUser = function() {
            return $user.user;
        };
        $scope.$watch(function () {
            return $user;
            },
            function(newVal, oldVal) {
                $scope.activeUser = $user.user;
            }, true);

        // $interval(function() {
        //  console.log(user.user);
        //  console.log($scope.activeUser); 
        // }, 1000);

        $scope.search = function(size){
            var modalInstance = $modal.open({
              templateUrl: 'search/search.html',
              controller: 'searchModalCtrl',
              size: size,
              resolve: {
                items: function () {
                  return $scope.items;
                }
              }
            });

            modalInstance.result.then(function (searchContent) {
                console.log(searchContent);
            });
        };

        $scope.logOut = function() {
            $scope.activeUser = null;
        }
    }
]);

app.controller('searchModalCtrl', function($scope, $modalInstance){
    $scope.searchContent = "";

    $scope.ok = function () {
        console.log($scope);
        $modalInstance.close($scope.searchContent);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});