/* recommended */
var AppController = function($scope, $location, NavBarService){

    $scope.test = 'test text';
    $scope.activeTabIndex = 1;
    $scope.activeTabName = "candidates";
    $scope.back = {
        coupons: false,
        businesses: false
    };
    $scope.backText = undefined;


    $scope.tabs = [
        {
            text: 'Account',
            link: '#account',
            default_link: "#account",
            class: 'passive',
            glyph: "glyphicon glyphicon-user",
            index: 0
        },
        {
            text: 'Candidates',
            link: '#candidates',
            default_link: "#candidates",
            class: 'passive',
            glyph: "glyphicon glyphicon-piggy-bank",
            index: 1
        },
        {
            text: 'Matches',
            link: '#matches',
            default_link: "#matches",
            class: 'passive',
            glyph: "glyphicon glyphicon-shopping-cart",
            index: 2
        }
    ];

    var refreshNavBar = function(){
        var value = NavBarService.getPathStack($scope.activeTabName);
        var next = NavBarService.getNextLocation($scope.activeTabName);
        $scope.pathStack = value;
        if(value.length == 0){
            $scope.back[$scope.activeTabName] = false;
            $scope.tabs[$scope.activeTabIndex].link = $scope.tabs[$scope.activeTabIndex].default_link;
            $scope.backText = undefined;

        }else{
            $scope.tabs[$scope.activeTabIndex].link = next;
            $scope.back[$scope.activeTabName] = true;
            $scope.backText = 'back'
        }
    }

    $scope.goBack = function(){
        $location.path(NavBarService.pathStackPop($scope.activeTabName));
    }

    NavBarService.registerObserverCallback(refreshNavBar);


    var init = function(){
        $scope.tabs[$scope.activeTabIndex].class = 'active';
    };

    $scope.changeTabs = function(tabIndex){
        $scope.tabs[$scope.activeTabIndex].class = 'passive';
        $scope.tabs[tabIndex].class = 'active';
        $scope.activeTabIndex = tabIndex;
        $scope.activeTabName = $scope.tabs[tabIndex].text.toLowerCase();
    };

    init();
};


angular
    .module('dine')
    .controller("AppController", AppController);

AppController.$inject = ['$scope', "$location", "NavBarService"];
