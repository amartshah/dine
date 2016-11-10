/* recommended */
var AccountController = function($scope, $window, UserService){
  $scope.test = "accounts page coming soon";
  $scope.user = UserService.getUser();
  $scope.state = {
      error: undefined,
      working: true
  };
  if($scope.user == undefined){
      UserService.getAccount(
          //successCallback
          function(value){
              $scope.user = value.data[0];
              $scope.state.working = false;
          },
          //failureCallback
          function(error){
              $scope.error = error;
              $scope.state.working = false;
          }
      );
  }else{
      $scope.state.working = false;
  }

};

angular
    .module('dine.account')
    .controller("AccountController", AccountController);

AccountController.$inject = ['$scope', "$window", "UserService"];
