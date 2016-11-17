
var appServices = angular.module('dine.services');


appServices.factory("ConfigService", function() {
    var backendUrl = "https://eecs-394-dine-backend.herokuapp.com";
    // var backendUrl = 'localhost:3000';
    var env = "prod";
    var industries = [
        {name: "Banking"},
        {name: "Creative"},
        {name: "Journalism"},
        {name: "Entertainment"},
        {name: "Retail"},
        {name: "Service"},
        {name: "Health Care"},
        {name: "Banking"},
        {name: "Comsumer Goods"},
        {name: "Consulting"},
        {name: "Pharmecuticals"},
        {name: "Technology"},
        {name: "Travel"},
        {name: "Finance"}
    ]

    return {
        url: backendUrl,
        industries: industries,
        env: env
    }
})
