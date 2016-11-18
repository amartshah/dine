var appServices = angular.module('dine.services');

appServices.factory('MatchesService', [function() {

    //TODO - get matches from database(add endpoint)
    var matches = [];

    var addMatch = function(candidate){
        matches.push(candidate)
    };

    var getMatches = function(){
        return matches;
    };

    return {
        addMatch: addMatch,
        getMatches: getMatches
    }
}]);
