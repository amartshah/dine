(function(angular) {

    angular.module("dine")
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/account', {
                    templateUrl: 'app/account/main.html',
                    controller: 'AccountController'}).
                when('/candidates', {
                    templateUrl: 'app/candidates/main.html',
                    controller: 'CandidatesController'}).
                when('/matches', {
                    templateUrl: "app/matches/main.html",
                    controller: "MatchesController"
                }).
                otherwise({
                    redirectTo: '/candidates'
                });

        }]);


}(angular));
