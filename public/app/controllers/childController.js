myApp.controller("childController", ["$scope", "childFactory", "$routeParams", "Auth", function($scope, childFactory, $routeParams, Auth){

  var childId = $routeParams.childId;

  $scope.getChildDonations = function(){
    childFactory.getChild(childId).success( function(data){
      $scope.child = data;


      Auth.currentUser().then(function(user) {
            console.log(user); // => {id: 1, ect: '...'}
            console.log(Auth.isAuthenticated());
          }, function(error) {
            // unauthenticated error
          });


    })
    .error(function(data){
      console.log("ERROR: ");
    });
  };


  $scope.getChildDonations();

}]);
