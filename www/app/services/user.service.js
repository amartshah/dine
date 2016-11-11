var appServices = angular.module('dine.services');

appServices.factory('UserService', ['$http', "ConfigService", function($http, ConfigService) {

    var user = {
        email: undefined,
        first_name: undefined,
        last_name: undefined,
        id: -1
    };

    var observerCallbacks = [];

    var login = function(email, password, success, failure) {
        var req = {
                method: 'GET',
                url: ConfigService.url + "/login",
                params: {
                    email: email,
                    password: password
                }
            }
            //TODO - Abstract this out into the service while keeping the $http
        $http(req).then(
            function(value) {
                console.log(value)
				user = value.data[0];
                success(user);
                notifyObservers();
            },
            function(error) {
                failure(error);
                console.log(error)
            }
        );

    };

    var createAccount = function(createAccountInfo, successCallback, failureCallback) {
        var req = {
            method: 'POST',
            url: ConfigService.url + '/user',
            data: createAccountInfo
        }

        $http(req).then(
            function(value) {
                console.log(value);
                user.email= createAccountInfo.email
                user.username= createAccountInfo.username
                user.first_name= createAccountInfo.first_name
                user.last_name= createAccountInfo.last_name
                user.password= createAccountInfo.password
                successCallback(value);
            },
            function(error) {
                console.log(error)
                failureCallback(error);
            }
        );

    };

    var updateAccount = function(info, successCallback, failureCallback) {
        var req = {
            method: 'POST',
            url: ConfigService.url + '/user/update',
            data: {
                key_name: info.key_name,
                key_value: info.key_value,
                updates: info.updates
            }
        }

        $http(req).then(
            function(value) {
                console.log(value);
                successCallback(value);
            },
            function(error) {
                console.log(error)
                failureCallback(error);
            }
        );

    };

    var getAccount = function(parameters, successCallback, failureCallback) {
        var userid = parameters.userid;
        var username = parameters.username;

        var req = {
            method: 'GET',
            url: ConfigService.url + '/user',
            params:{
                username: username,
                userid: userid
            }
        };

        $http(req).then(
            function(value) {
                console.log(value)
				user = value.data[0];
                successCallback(value);
                notifyObservers();
            },
            function(error) {
                console.log(error)
                failureCallback(error);
            }
        );
    }
    //register an observer
    var registerObserverCallback = function(callback) {
        observerCallbacks.push(callback);
    };

    //call this when you know 'foo' has been changed
    var notifyObservers = function() {
        angular.forEach(observerCallbacks, function(callback) {
            callback();
        });
    };
    var getUser = function() {
        return user;
    }

	var isLoggedIn = function(){
		return user.id !== -1;
	}
    return {
        login: login,
        getUser: getUser,
        createAccount: createAccount,
        updateUser: updateAccount,
        getAccount: getAccount,
        isLoggedIn: isLoggedIn,
        registerObserverCallback: registerObserverCallback
    }
}]);
