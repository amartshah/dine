/* recommended */
var AccountController = function($scope, $window, UserService){
  $scope.test = "accounts page coming soon";
  $scope.user = UserService.getUser();
  $scope.state = {
      error: undefined,
      working: true
  };
};

angular
    .module('dine.account')
    .controller("AccountController", AccountController);

AccountController.$inject = ['$scope', "$window", "UserService"];
