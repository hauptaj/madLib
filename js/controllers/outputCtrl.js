var app = angular.module('myMod');

app.controller('outputController', function($scope, infoFactory) { //declaring the name of the controller and listing its dependencies
  function displayWords(storyData) {  //storyData is the 'storage bin' variable that was declared in factory.js
    $scope.madLib = infoFactory.getInfo(storyData); //binding the storyData to the $scope
    console.log($scope.madLib);
  }

  displayWords();

});
