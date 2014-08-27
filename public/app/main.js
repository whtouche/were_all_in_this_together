var myApp = angular.module("myApp", ["ngRoute", "Devise", "ngResource"]);

myApp.config(['$routeProvider', 'AuthProvider', function($routeProvider, AuthProvider){


  $routeProvider
  .when('/', {
    controller: 'childrenController',
    templateUrl: 'app/views/childrenIndex.html'
  })
  .when('/children/:childId', {
    controller: 'childController',
    templateUrl: 'app/views/childShow.html'
  })
  .when('/children/:childId/donations/:donationId', {
    controller: 'donationController',
    templateUrl: 'app/views/donationShow.html'
  })
  .when('/authenticate', {
    controller: 'authController',
    templateUrl: 'app/views/login.html'
  });

  myApp.config(['$httpProvider',function($httpProvider)
  {
    $httpProvider.defaults.withCredentials = true;
  }
  ]);
}]);
