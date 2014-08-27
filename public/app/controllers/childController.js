myApp.controller("childController", ["$scope", "childFactory", "$routeParams", "Auth", function($scope, childFactory, $routeParams, Auth){
 Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            console.log(user); // => {id: 1, ect: '...'}
            console.log(Auth.isAuthenticated()); // True or False
          }, function(error) {
            // unauthenticated error
          });

 var childId = $routeParams.childId;

 childFactory.getChild(childId).success( function(data){
  $scope.child = data;
})
 .error(function(data){
  console.log("ERROR: ");
});
}

]);
