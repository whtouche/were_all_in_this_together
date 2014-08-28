var myApp = angular.module("myApp", ["ngRoute", "Devise", "ngResource"]);

myApp.config(['$routeProvider', 'AuthProvider',  function($routeProvider, AuthProvider){


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
  .when('/signup', {
    controller: 'userController',
    templateUrl: 'app/views/signUp.html'
  })
  .when('/signin', {
    controller: 'userController',
    templateUrl: 'app/views/signIn.html'
  })
  ;

  // myApp.config(['$httpProvider', 'AuthProvider',function($httpProvider, AuthProvider)
  // {
  //   $httpProvider.defaults.withCredentials = true;
  // }
  // ]);

  // myApp.config(function(AuthProvider) {
  //       // Customize login
  //       AuthProvider.loginMethod('GET');
  //       AuthProvider.loginPath('/admins/login.json');

  //       // Customize logout
  //       AuthProvider.logoutMethod('POST');
  //       AuthProvider.logoutPath('/user/logout.json');

  //       // Customize register
  //       AuthProvider.registerMethod('PATCH');
  //       AuthProvider.registerPath('/user/sign_up.json');

  //       // Ignore 401 Unauthorized everywhere
  //       // Disables `devise:unauthorized` interceptor
  //       AuthProvider.ignoreAuth(true);

  //       // Customize user parsing
  //       // NOTE: **MUST** return a truth-y expression
  //       AuthProvider.parse(function(response) {
  //         return response.data.user;
  //       });
  //     });
}]);
