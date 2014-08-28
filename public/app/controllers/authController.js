myApp.controller("authController", ["$scope", "$routeParams", "Auth", function($scope, $routeParams, Auth){

  //An object containing auth materials
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
  Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            console.log(user); // => {id: 1, ect: '...'}
          }, function(error) {
            // unauthenticated error
          });
  Auth.logout().then(function(oldUser) {
            // alert(oldUser.name + "you're signed out now.");
          }, function(error) {
            // An error occurred logging out.
          });

  $scope.$on('devise:logout', function(event, oldCurrentUser) {
            // ...
          });

}]);
