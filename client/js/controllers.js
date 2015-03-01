var controllers = angular.module('controllers', []);

controllers.controller("classListController", ["$scope", "$http", function($scope, $http){

  $scope.classes = {};

  $http.get('/api/classes')
  .success(function(classes){
    $scope.classes = classes;
  });
}]);

controllers.controller("studentListController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){


  $scope.students = {};
  $scope.name = "";

  $scope.getStudents = function (){
    $http.get('/api/classes/'+$routeParams.id+'/students')
    .success(function(students){
      $scope.students = students;
    });
  }

  $scope.newStudent = function() {
    console.log($scope.name);
    $http.post('/api/classes/'+$routeParams.id+'/students', {name:$scope.name, status:"checked out", last_action_date:new Date()})
    .success(function(student){
      $scope.students.push(student);
      $scope.name = "";
    });
  };

  $scope.checkInPre = function(studentId) {
    $http.post('/api/students/checkinpre', {studentId:studentId})
    .success(function(student){
      $scope.getStudents();
    });
  }

  $scope.checkInAfter = function(studentId) {
    $http.post('/api/students/checkinafter', {studentId:studentId})
    .success(function(student){
      $scope.getStudents();
    });
  }

  $scope.checkOut = function(studentId) {
    $http.post('/api/students/checkOut', {studentId:studentId})
    .success(function(student){
      $scope.getStudents();
    });
  }

  $scope.getStudents();
}]);
