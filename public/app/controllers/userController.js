(function() {
  var userController = function($scope, userFactory, $location) {

    // $('.header').css('position', 'fixed');
    // $('#sidebar').css('z-index', '0');
    // $('ul.sidebar-menu').css('margin-top', '75px;');
    // if($('#sidebar').css('margin-left')!=='0px') {
    //   $('.fa-bars').trigger('click');
    // }

    $scope.sendRegistration = function() {
      userFactory.signup($scope.email, $scope.password)
        .then(function(registeredUser){
          alert("Congratulations! You've signed up successfully!");
          $location.path("/");
        }, function(err) {
          alert("Something went wrong. Maybe you have already registered?");
          $location.path("/signup");
        });
    };

    $scope.login = function() {
      userFactory.signin($scope.email, $scope.password)
        .then(function(user){
          $location.path("/");
        }, function(err) {
          alert("Your email or password is incorrect. Please try again.");
          $location.path("/signin");
        });
    };
  $scope.logout = function() {
    Auth.logout().then(function(user) {
      $location.path('/');
    }, function(error) {
      $flashFactory.setMessage("There was a problem signing you out.");
      $route.reload();
    });
  };



  };


  userController.$inject = ["$scope", "userFactory", "$location"];
  angular.module('myApp').controller('userController', userController);
})();
