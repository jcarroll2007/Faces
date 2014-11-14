var app = angular.module('Faces', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'angularFileUpload',
    'Faces_Login',
    'Faces_Register',
    'Faces_Me',
    'Faces_Search',
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

app.controller('FacesCtrl', ['$scope', '$rootScope', '$window', '$modal', '$user', '$interval', 'routing', 'URLs',
    function($scope, $rootScope, $window, $modal, $user, $interval, routing, URLs){
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
            routing.change_view(URLs.SEARCH);
            $rootScope.$broadcast('Search', $scope.searchParameter);
        };

        $scope.logOut = function() {
            $scope.activeUser = null;
        };
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