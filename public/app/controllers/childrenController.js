myApp.controller("childrenController", ["$scope", "childFactory", "$routeParams", "Auth", function($scope, childFactory, $routeParams, Auth){
  var childId = $routeParams.childId;

  // This is getting run even if someone is not signed in which is bad
  childFactory.getChildren().success( function(data){
    $scope.children = data;
  })
  .error( function(data){
  console.log("ERROR:");
  // console.log()

});}]);
