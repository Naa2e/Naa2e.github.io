var controllers = angular.module('profileapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
  $scope.message = 'Home Page';
}]);


controllers.controller('DeveloperController', ['$scope', function($scope){
  $scope.message = 'Developer Page';
}]);


controllers.controller('DesignerController', ['$scope', function($scope){
  $scope.message = 'Designer Page';
  $scope.needs=[];
}]);

controllers.controller('DancerController', ['$scope', function($scope){
  $scope.message = 'Dancer Page';
  $scope.needs=[];
}]);
