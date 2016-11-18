var appServices = angular.module('dine.services');


appServices.factory("ConfigService", function() {
    var backendUrl = "https://eecs-394-dine-backend.herokuapp.com";
    // var backendUrl = 'localhost:3000';

    var env = "dev";
    var industries = [
        {name: "Agriculture"},
        {name: "Arts"},
        {name: "Construction"},
        {name: "Consumer Goods"},
        {name: "Corporate"},
        {name: "Education"},
        {name: "Finance"},
        {name: "Government"},
        {name: "Legal"},
        {name: "Manufacturing"},
        {name: "Media"},
        {name: "Medical"},
        {name: "Non-Profit"},
        {name: "Recreational"},
        {name: "Service"},
        {name: "Technology"},
        {name: "Transportation"}
    ]

    return {
        url: backendUrl,
        industries: industries,
        env: env
    }
})
