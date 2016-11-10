/* recommended */
var LoginController = function($scope, $location,$rootScope, UserService){
    $scope.loginInfo = {
        email: undefined,
        password: undefined
    }

    $scope.error = undefined;

    $scope.user = undefined;

    $scope.logIn= function(){
        UserService.login(
            $scope.loginInfo.email,
            $scope.loginInfo.password,
            //successCallback
            function(value){
                $scope.user = UserService.getUser();
                $rootScope.loggedInUser = UserService.getUser();
                $location.path('/account');
            },

            //failureCallback
            function(error){
                $scope.error = error;
            }

        )
    }
};

angular
    .module('dine.login')
    .controller("LoginController", LoginController);

LoginController.$inject = ['$scope', '$location', "$rootScope","UserService"];
