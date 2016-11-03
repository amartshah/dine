/* recommended */
var CandidatesController = function($scope, $timeout,CandidatesService, UserService) {
    $scope.test = "Candidates Page Coming Soon!";
    $scope.state = {
        error: undefined,
        working: false
    }
    $scope.match = undefined;
    $scope.candidates = [];
    $scope.currentCandidate = undefined;
    $scope.user = UserService.getUser();
    var tryCount = 5;

    var init = function(){
        $scope.state.working = true;
        tryCount--;
        if($scope.user.id == -1){
            if(tryCount > -1){
                $timeout($scope.init, 200);
            }else{
                $scope.state.working = false;
            }
        }else{
            $scope.getNextSetOfMatches();
        }
    }

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
        if($scope.currentCandidate.likes){
            $scope.match = $scope.currentCandidate
        }else{
            $scope.moveToNextCandidate();
        }
    }

    $scope.swipeLeft = function() {
        CandidatesService.swipeLeft();
        $scope.moveToNextCandidate();
    }

    $scope.moveToNextCandidate = function() {
        //TODO - load new candidates when a few left
        //TODO - handle when there are no more candidates
        $scope.currentCandidate = $scope.candidates.pop();
        $scope.match = undefined;
        if (currentCandidate == undefined) {
            $scope.state.working = true;
			//TODO -- get more peeps
        }
    }

    $scope.viewProfile = function(){
        console.log("viewProfile");
    }



    init();
};

angular
    .module('dine.candidates')
    .controller("CandidatesController", CandidatesController);

CandidatesController.$inject = ['$scope', "$timeout","CandidatesService", "UserService"];
