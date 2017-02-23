var app = angular.module('myMod');
app.controller('inputController', function($scope, $location, infoFactory){ //need $scope because that's where the functions get called, infoFactory because that's where I'm sending it and $location because I'm changing the URL in the last step of the function

  $scope.grabData = function(story) { //grabData is the function called on ng-click in input.html (passing in the object)

    console.log(story);

    infoFactory.setInfo(story); //infoFactory is the name of my factory. This line call the setInfo (declared in factory) function to send the story object to infoFactory

    $location.path('/output'); //this method will change the URL when ng-click is activated
  };

});
