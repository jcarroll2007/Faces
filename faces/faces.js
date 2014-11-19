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

app.controller('FacesCtrl', ['$scope', '$rootScope', '$window', '$modal', '$user', '$interval', 'routing', 'URLs', '$http', 'users', 'SearchParameter',
    function($scope, $rootScope, $window, $modal, $user, $interval, routing, URLs, $http, users, SearchParameter){

        /*
         * Automatic login for debug only
         */
        // $http.post('http://robertryanmorris.com/services/FaceServices/api/Login', { uname: 'jcarroll2007@gmail.com', pass: 'faces'})
        // .success(function(user) {
        //     $user.user = user;
        //     $scope.activeUser = $user.user;
        // });

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
            SearchParameter.text = $scope.searchParameter;
            routing.change_view(URLs.SEARCH);
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

app.service('hashpass', function(){ 
return {

        name: 'SHA1',
        readonly: true,

        encode: function(input) {
            function rotate_left(n,s) {
                var t4 = ( n<<s ) | (n>>>(32-s));
                return t4;
            };

            function lsb_hex(val) {
                var str="";
                var i;
                var vh;
                var vl;

                for( i=0; i<=6; i+=2 ) {
                    vh = (val>>>(i*4+4))&0x0f;
                    vl = (val>>>(i*4))&0x0f;
                    str += vh.toString(16) + vl.toString(16);
                }
                return str;
            };

            function cvt_hex(val) {
                var str="";
                var i;
                var v;

                for( i=7; i>=0; i-- ) {
                    v = (val>>>(i*4))&0x0f;
                    str += v.toString(16);
                }
                return str;
            };


            function Utf8Encode(input) {
                input = input.replace(/\r\n/g,"\n");
                var utftext = "";

                for (var n = 0; n < input.length; n++) {

                    var c = input.charCodeAt(n);

                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    }
                    else if((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                    else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }

                }

                return utftext;
            };

            var blockstart;
            var i, j;
            var W = new Array(80);
            var H0 = 0x67452301;
            var H1 = 0xEFCDAB89;
            var H2 = 0x98BADCFE;
            var H3 = 0x10325476;
            var H4 = 0xC3D2E1F0;
            var A, B, C, D, E;
            var temp;

            input = Utf8Encode(input);

            var input_len = input.length;

            var word_array = new Array();
            for( i=0; i<input_len-3; i+=4 ) {
                j = input.charCodeAt(i)<<24 | input.charCodeAt(i+1)<<16 |
                input.charCodeAt(i+2)<<8 | input.charCodeAt(i+3);
                word_array.push( j );
            }

            switch( input_len % 4 ) {
                case 0:
                    i = 0x080000000;
                break;
                case 1:
                    i = input.charCodeAt(input_len-1)<<24 | 0x0800000;
                break;

                case 2:
                    i = input.charCodeAt(input_len-2)<<24 | input.charCodeAt(input_len-1)<<16 | 0x08000;
                break;

                case 3:
                    i = input.charCodeAt(input_len-3)<<24 | input.charCodeAt(input_len-2)<<16 | input.charCodeAt(input_len-1)<<8    | 0x80;
                break;
            }

            word_array.push( i );

            while( (word_array.length % 16) != 14 ) word_array.push( 0 );

            word_array.push( input_len>>>29 );
            word_array.push( (input_len<<3)&0x0ffffffff );


            for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {

                for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
                for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);

                A = H0;
                B = H1;
                C = H2;
                D = H3;
                E = H4;

                for( i= 0; i<=19; i++ ) {
                    temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B,30);
                    B = A;
                    A = temp;
                }

                for( i=20; i<=39; i++ ) {
                    temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B,30);
                    B = A;
                    A = temp;
                }

                for( i=40; i<=59; i++ ) {
                    temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B,30);
                    B = A;
                    A = temp;
                }

                for( i=60; i<=79; i++ ) {
                    temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B,30);
                    B = A;
                    A = temp;
                }

                H0 = (H0 + A) & 0x0ffffffff;
                H1 = (H1 + B) & 0x0ffffffff;
                H2 = (H2 + C) & 0x0ffffffff;
                H3 = (H3 + D) & 0x0ffffffff;
                H4 = (H4 + E) & 0x0ffffffff;
            }

            var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

            return temp.toLowerCase();
        }
    };
});