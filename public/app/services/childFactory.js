myApp.factory("childFactory", ['$http', function($http){

  var factory = {};

  factory.getChildren = function(){
    return $http.get('/api/children/');
  };

  factory.getChild = function(childId){
    return $http.get('/api/children/'+childId);
  };

  factory.createChild = function(userId, child){
    return $http.post('/api/children/', donation);
  };

  return factory;

}]);
