var app = angular.module("beansprouts_app", ['ngRoute', 'controllers']);

app.config(function($routeProvider){
  $routeProvider
  .when('/classes',{
    templateUrl: 'classes.html',
    controller: "classListController"
  })
  .when('/class/:id',{
    templateUrl: 'class.html',
    controller: "studentListController"
  })
  .otherwise({
    templateUrl: 'classes.html',
    controller: "classListController"
  })
});
