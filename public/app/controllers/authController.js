myApp.controller("authController", ["$scope", "$routeParams", "Auth", function($scope, $routeParams, Auth){

 Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            console.log(user); // => {id: 1, ect: '...'}
          }, function(error) {
            // unauthenticated error
          });

}]);
