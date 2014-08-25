myApp.factory("donationFactory", ['$http', function($http){

  var factory = {};

  factory.getDonation = function(childId){
    return $http.get('/api/children/'+childId+'/donations');
  };
  factory.createDonation = function(){
    $http.post('/api/children/'+childId+'/donations');
  }

  return factory;

}]);
