/* recommended */
var AccountController = function($scope, UserService){
    $scope.test = "accounts page coming soon";
    $scope.user = undefined;
    $scope.state = {
	error: undefined,
	working: true
    };

    $scope.loc = navigator.geolocation.getCurrentPosition(function(position) {
	$scope.lat = position.coords.latitude;
	$scope.lon = position.coords.longitude
//	do_something(position.coords.latitude, position.coords.longitude);
    });

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
};

angular
    .module('dine.account')
    .controller("AccountController", AccountController);

AccountController.$inject = ['$scope', "UserService"];
