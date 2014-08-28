myApp.factory("userFactory", ['$http', 'Auth', function( Auth, $http){

    var factory = {};

    factory.signup = function(email, password) {
      return Auth.register({email: email, password: password});
    };

    factory.signin = function(email, password) {
      return Auth.login({email: email, password: password});
    };

    return factory;

}]);
