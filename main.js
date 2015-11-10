var app = angular.module('TodoApp', []);

app.controller("TodoCtrl", function($scope, $rootScope){
  $scope.title = "Welcome to your Todo app";
  $rootScope = "I AM EVERYWHERE!";

  $scope.todos = [
  {name: "Mow the lawn"},
  {name: "kill the cat"},
  {name: "eat more beef"},
  {name: "taxes and bitches"}
  ]
});



app.controller("PastaCtrl", function($scope){
  $scope.pasta = "Yay Pasta!";
  $scope.foods = "";
})