var myApp = angular.module("waitt", []);
myApp.controller("waittController", function($scope){
  $scope.hiBen = "hey how are you ben?";
});
myApp.controller("childrenController", function($resource, $scope){

});
