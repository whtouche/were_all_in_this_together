myApp.controller("userController", ["$scope", "userFactory", "$location", function($scope, userFactory, $location){

  $scope.sendRegistration = function() {
    userFactory.signup($scope.email, $scope.password)
    .then(function(registeredUser){
      alert("Signed in!");
      $location.path('/');
    }, function(error){
      alert("Someting went wrong");
      $location.path('/signup');
    });
  };


  $scope.login = function() {
    userFactory.signin($scope.email, $scope.password)
    .then(function(user){
      $location.path('/');
    }, function(error) {
      alert("Your login stuff was not right");
      $location.path('/signin');
    });
  };
}]);







