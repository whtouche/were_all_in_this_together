myApp.controller("childController", ["$scope", "childFactory", "$routeParams", "Auth", function($scope, childFactory, $routeParams, Auth){

 var childId = $routeParams.childId;

 childFactory.getChild(childId).success( function(data){
  $scope.child = data;
})
 .error(function(data){
  console.log("ERROR: ");
});
}

]);
