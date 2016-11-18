/* recommended */
var CandidatesController = function($scope, $timeout,CandidatesService, UserService) {
    $scope.test = "Candidates Page Coming Soon!";
    $scope.state = {
        error: undefined,
        working: false
    }
    $scope.match = undefined;
    $scope.candidates = [];
    $scope.user = UserService.getUser();
    var tryCount = 5;

    var init = function(){
        $scope.state.working = true;
        $scope.getNextSetOfMatches();

    }

    $scope.getNextSetOfMatches = function() {
        $scope.state.working = true;
        CandidatesService.getNextSetOfMatches(
            //successCallback
            function(value) {
                for(var i = 0; i<value.data.length; i ++){
                    if(value.data[i].photo_link == null || value.data[i].photo_link == undefined){
                        value.data[i].photo_link = "http://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg";
                    }
                }

                $scope.candidates = value.data;
                $scope.state.working = false;
            },
            //failureCallback
            function(error) {
                $scope.state.error = error;
                $scope.state.working = false;
            }
        )
    }


    $scope.like = function(candidate) {
        candidate.liked = true;
    }

    $scope.unlike = function(candidate) {
        candidate.liked = false;
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
