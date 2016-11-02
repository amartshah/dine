angular.module('dine.candidates', []);
angular.module('dine.matches', []);
angular.module('dine.account', []);



angular.module('dine', ['supersonic',
        'ngRoute',
        'ngResource',
        "ui.bootstrap",
        'dine.matches',
        'dine.candidates',
        "dine.services",
        "dine.account",

    ])
    .controller('IndexController', function($scope, supersonic) {

    });

// app.filter('ageFilter', function() {
//			function calculateAge(birthday) { // birthday is a date
//					var ageDifMs = Date.now() - birthday.getTime();
//					var ageDate = new Date(ageDifMs); // miliseconds from epoch
//					return Math.abs(ageDate.getUTCFullYear() - 1970);
//			}
//
//			return function(birthdate) {
//						return calculateAge(birthdate);
//			};
// });
