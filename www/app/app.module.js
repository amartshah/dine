angular.module('dine.candidates', []);
angular.module('dine.matches', []);
angular.module('dine.account', []);



angular.module('dine', [
                        'supersonic',
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
