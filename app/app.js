
var app = angular.module('uwCookingApp',['ui.router']);

app.config()

app.controller("testCtrl", ["$scope", function($scope) {
  $scope.test_var = "mcdonalds"
}]);
