/* recommended */
var CandidatesController = function($scope){
  $scope.test = "Candidates Page Coming Soon!";
};

angular
    .module('dine.candidates')
    .controller("CandidatesController", CandidatesController);

CandidatesController.$inject = ['$scope'];
