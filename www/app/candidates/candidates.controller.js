/* recommended */
var CandidatesController = function($scope, CandidatesService) {
    $scope.test = "Candidates Page Coming Soon!";
    $scope.state = {
        error: undefined,
        working: false
    }
    $scope.match = undefined;
    $scope.candidates = [];
    $scope.currentCandidate = undefined;

    $scope.getNextSetOfMatches = function() {
        $scope.state.working = true;
        CandidatesService.getNextSetOfMatches(
            //successCallback
            function(value) {
                $scope.candidates = value.data;
                $scope.currentCandidate = $scope.candidates.pop();
                $scope.state.working = false;
            },
            //failureCallback
            function(error) {
                $scope.state.error = error;
                $scope.state.working = false;
            }
        )
    }


    $scope.swipeRight = function() {
        CandidatesService.swipeRight();
        if($scope.currentCandidate.likes && $scope.match == undefined){
            $scope.match = $scope.currentCandidate
        }else{
            $scope.match = undefined;
            moveToNextCandidate();
        }
    }

    $scope.swipeLeft = function() {
        CandidatesService.swipeLeft();
        moveToNextCandidate();
    }

    var moveToNextCandidate = function() {
        //TODO - load new candidates when a few left
        //TODO - handle when there are no more candidates
        $scope.currentCandidate = $scope.candidates.pop();
        if (currentCandidate == undefined) {
            $scope.state.working = true;
			//TODO -- get more peeps
        }
    }


};

angular
    .module('dine.candidates')
    .controller("CandidatesController", CandidatesController);

CandidatesController.$inject = ['$scope', "CandidatesService"];
