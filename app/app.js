
var uwCookingApp = angular.module('uwCookingApp',['ui.router', 'ui.bootstrap']);
console.log("I ran app.js");

uwCookingApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/main");

  $stateProvider.state("main", {
    url: "/main",
    templateUrl: "main/main.html",
    controller: "mainCtrl"
  })
}]);
