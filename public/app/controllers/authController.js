myApp.controller("authController", ["$scope", "Auth", function($scope, Auth){
 Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            console.log(user); // => {id: 1, ect: '...'}
            console.log(Auth.isAuthenticated()); // True or False
          }, function(error) {
            // unauthenticated error
          });

         var credentials = {
            email: $scope.email,
            password: $scope.password
        };

        Auth.login(credentials).then(function(user) {
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // Authentication failed...
        });

        $scope.$on('devise:login', function(event, currentUser) {
            // after a login, a hard refresh, a new tab
        });

        $scope.$on('devise:new-session', function(event, currentUser) {
            // user logged in by Auth.login({...})
        });

}]);
