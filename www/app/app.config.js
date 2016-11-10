(function(angular) {

    angular.module("dine")
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/account', {
                templateUrl: 'app/account/main.html',
                controller: 'AccountController'
            }).
            when('/candidates', {
                templateUrl: 'app/candidates/main.html',
                controller: 'CandidatesController'
            }).
            when('/matches', {
                templateUrl: "app/matches/main.html",
                controller: "MatchesController"
            }).
            when('/login', {
                templateUrl: "app/login/main.html",
                controller: "LoginController"
            }).
            otherwise({
                redirectTo: '/login'
            });

        }])
        .run(function($rootScope, $location) {
            // register listener to watch route changes
            $rootScope.$on("$routeChangeStart", function(event, next, current) {
                if ($rootScope.loggedInUser == null) {
                    // no logged user, we should be going to #login
                    if (next.templateUrl == "login/main.html") {
                        // already going to #login, no redirect needed
                    } else {
                        // not going to #login, we should redirect now
                        $location.path("/login");
                    }
                }
            });
        });


}(angular));
