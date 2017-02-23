var app = angular.module('myMod', ['ngRoute']); //module is being declared. ngRoute is where angular-route is being referenced

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/input', {
      controller: 'inputController', //name of the controller specified in the inputCtrl.js file
      templateUrl: 'js/views/input.html' //needs the path to the file
    })
    .when('/output', {
      controller: 'outputController', //name of the controller specified in the outputCtrl.js file
      templateUrl: 'js/views/output.html' //needs the path to the file
    })
    //.otherwise({redirectTo: '/input'});
    .otherwise({
      template: '<h1>Please make a selection from the links above</h1>' //how Garrett did his
    })

    $locationProvider.hashPrefix('');
});
