myApp.controller("childrenController", ["$scope", "childFactory", "$routeParams", "Auth", function($scope, childFactory, $routeParams, Auth){
  var childId = $routeParams.childId;

  childFactory.getChildren().success( function(data){
    $scope.children = data;
  })
  .error( function(data){
  console.log("ERROR:");
  // console.log()
});}]);
