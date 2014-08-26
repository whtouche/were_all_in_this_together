myApp.factory("donationFactory", ['$http', function($http){

  var factory = {};

  //Called by $scope.getDonation in donationController
  factory.getDonations = function(childId){
    return $http.get('/api/children/'+childId+'/donations');
  };
  factory.getDonation = function(childId, donationId){
    return $http.get('/api/children/'+childId+'/donations'+'/'+donationId);
  };

  factory.createDonation = function(childId, donation){
    return $http.post('/api/children/'+childId+'/donations', donation);
  };

  return factory;

}]);
