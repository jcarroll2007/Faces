var  app = angular.module('Faces_Register', ['ui.bootstrap', 'ngAnimate']);

app.constant('partial_urls', {
    PERSONAL_INFO: "/register/partials/personal_info.html",
    ABOUT: "/register/partials/about.html",
    PROFILE_PICTURE: "/register/partials/profile_picture.html"
});

app.controller('RegisterCtrl', ['$scope', 'partial_urls', function($scope, partial_urls) {

    // User Data
    $scope.user = {
        first_name: "",
        last_name: "",
        email: "",
        email_verification: "",
        password: "",
        password_verification: "",
        date_of_birth: ""
    };

    // The register page has several different partials that are used to get the new user's data
    // This is a list of all of them.
    $scope.partials = [
        partial_urls.PERSONAL_INFO,
        partial_urls.ABOUT,
        partial_urls.PROFILE_PICTURE,
    ];

    // This index represents the current partial in $scope.partials that is being used.
    var current_partial_index = 0;

    // Current partial to be displayed.
    $scope.current_partial = $scope.partials[current_partial_index];

    $scope.is_first_partial = function() {
       return current_partial_index === 0 ? true : false;
    };

    $scope.is_last_partial = function() {
        var last_partial_index = $scope.partials.length - 1;
        return current_partial_index === last_partial_index ? true : false;
    };

    $scope.next_partial = function() {
        $scope.current_partial = $scope.partials[++current_partial_index];
    };

    $scope.previous_partial = function() {
        $scope.current_partial = $scope.partials[--current_partial_index];
    };

    // Datepicker Optuons and variables
    $scope.datepicker_opened = false;

    $scope.open_datepicker = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.datepicker_opened = !$scope.datepicker_opened;
    };

    $scope.date_options = {
        formatYear: 'yy',
        startingDay: 1
    };
}]);