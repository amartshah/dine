/* recommended */
var AccountController = function($scope, UserService){
    $scope.test = "accounts page coming soon";
    $scope.user = undefined;
    $scope.state = {
	error: undefined,
	working: true
    };

    $scope.loc = navigator.geolocation.getCurrentPosition(function(position) {
	$scope.center = {
	    lat: position.coords.latitude,
	    lng: position.coords.longitude,
	    zoom: 20
	}

	$scope.markers = {
	    currentLoc: {
		lat: $scope.center.lat,
		lng: $scope.center.lng,
		focus: true
	    }
	}
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
