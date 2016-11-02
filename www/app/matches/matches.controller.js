/* recommended */
var MatchesController = function($scope){
  $scope.test = "Matches Page Coming Soon!";
};

angular
    .module('dine.matches')
    .controller("MatchesController", MatchesController);

MatchesController.$inject = ['$scope'];
