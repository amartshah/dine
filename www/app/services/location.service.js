var appServices = angular.module('dine.services');

appServices.factory('LocationService', ['$http', "UserService", "ConfigService", '$rootScope', function($http, UserService, ConfigService, $rootScope) {

    var user = UserService.getUser();

    var updateLocation = function(info) {
        var req = {
            method: 'POST',
            url: ConfigService.url + '/location',
            data: {
                userId: user.id,
                lat: info.lat,
                lon: info.lon
            }
        }

	if(user.id > 0) {

            $http(req).then(
		function(value) {
                    console.log(value);
           //         successCallback(value);
		},
		function(error) {
                    console.log(error)
             //       failureCallback(error);
		}
            );
	}
    };


    return {
	updateLocation: updateLocation
    }
}]);
