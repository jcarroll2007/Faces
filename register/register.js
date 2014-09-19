var  app = angular.module('Faces_Register', []);

app.controller('RegisterCtrl', ['$scope', function($scope) {
    $scope.register_message = "hello";

    // Datepicker Optuons and variables
    $scope.datepicker_opened = false;

    $scope.open_datepicker = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.datepicker_opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

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
}]);