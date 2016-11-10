var appServices = angular.module('dine.services', []);

appServices.factory("ConfigService", function() {
    var backendUrl = "https://eecs-394-dine-backend.herokuapp.com";
    //var backendUrl = localhost:3000

    return {
        url: backendUrl
    }
})


appServices.factory('CandidatesService', ["$http", "UserService", "ConfigService", function($http, UserService, ConfigService) {

    var userManuallyInitialized = false;
    var user = UserService.getUser();

    var getNextSetOfMatches = function(successCallback, failureCallback) {
        if (user.id == -1 && userManuallyInitialized) {
            user = UserService.getUser();
        }

        if (user.id == -1) {
            failureCallback({
                id: -1,
                message: "user must be logged in"
            });
        }

        var req = {
            method: 'GET',
            url: ConfigService.url + "/candidate",
            params: {
                userId: user.id
            }
        }


        $http(req).then(
            function(value) {
                successCallback(value);
            },
            function(error) {
                failureCallback(error);
            }
        );

    }

    var swipeRight = function(id) {
        console.log("swipe right");
    }

    var swipeLeft = function() {
        console.log("swipe left");
    }




    return {
        getNextSetOfMatches: getNextSetOfMatches,
        swipeRight: swipeRight,
        swipeLeft: swipeLeft
    }

}]);






//Old Clips stuff below


appServices.factory('CreateAccountService', ['$resource', function($resource) {
    return $resource('localhost:3000/account', {}, {
        //return $resource('https://eecs394-clips-backend.herokuapp.com/account', {},{
        //{email: 'default', password: 'default', username: 'default', first_name: "default", last_name: 'default'},	{
        create: {
            method: "POST"
        }
    });
}]);

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
            url: 'https://eecs394-clips-backend.herokuapp.com/account',
            params: {
                email: createAccountInfo.email,
                username: createAccountInfo.username,
                first_name: createAccountInfo.first_name,
                last_name: createAccountInfo.last_name,
                password: createAccountInfo.password
            }
        }

        $http(req).then(
            function(value) {
                console.log(value)
                successCallback(value);
            },
            function(error) {
                console.log(error)
                failureCallback(error);
            }
        );

    };

    var getAccount = function(successCallback, failureCallback) {
        var userId = 9;

        var req = {
            method: 'GET',
            url: ConfigService.url + '/user/' + userId
        }

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
        getAccount: getAccount,
        isLoggedIn: isLoggedIn,
        registerObserverCallback: registerObserverCallback
    }
}]);

appServices.factory('NavBarService', [function() {
    var pathStack = {
        coupons: [],
        businesses: []
    }

    var currentStates = {
        coupons: "#coupons",
        businesses: "#businesses"
    }


    var observerCallbacks = [];

    var pathStackPop = function(page) {
        var next = pathStack[page].pop();
        notifyObservers();
        return next;
    }

    var pathStackPush = function(page, route, next) {
        pathStack[page].push(route);
        currentStates[page] = next
        notifyObservers();
        return pathStack[page];
    }

    var getPathStack = function(page) {
        return pathStack[page];
    }

    var getNextLocation = function(page) {
        return currentStates[page];
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


    return {
        pathStackPush: pathStackPush,
        pathStackPop: pathStackPop,
        getPathStack: getPathStack,
        getNextLocation: getNextLocation,
        registerObserverCallback: registerObserverCallback
    };
}]);
