/* recommended */
var AccountController = function($scope){
  $scope.test = "accounts page coming soone"
};

angular
    .module('dine.account')
    .controller("AccountController", AccountController);

AccountController.$inject = ['$scope'];
