var app = angular.module('Faces', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'angularFileUpload',
    'Faces_Login',
    'Faces_Register',
    'Faces_Me',
    'Faces_Search',
    'Faces_Friend',
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
            controller: "FriendCtrl"
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

app.controller('FacesCtrl', ['$scope', '$rootScope', '$window', '$modal', '$user', '$interval', 'routing', 'URLs', '$http',
    function($scope, $rootScope, $window, $modal, $user, $interval, routing, URLs, $http){

        /*
         * Automatic login for debug only
         */
        $http.post('http://robertryanmorris.com/services/FaceServices/api/Login', { uname: 'jcarroll2007@gmail.com', pass: 'faces'})
        .success(function(user) {
            $user.user = user;
            $scope.activeUser = $user.user;
        });

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

        $scope.loading = false;
        $scope.$on("Loading", function() {
            $scope.loading = true;
        });
        $scope.$on("LoadingDone", function() {
            $scope.loading = false;
        });
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

app.service('LoadingGif', function($rootScope) {
    loadingGif = {};

    loadingGif.show = function() {
        $rootScope.$broadcast('Loading');
    };
    loadingGif.hide = function() {
        $rootScope.$broadcast('LoadingDone');
    };

    return loadingGif;
});