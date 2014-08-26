myApp.factory("donationFactory", ['$http', function($http){

  var factory = {};

  factory.getDonation = function(childId){
    return $http.get('/api/children/'+childId+'/donations');
  };
  factory.createDonation = function(childId, donation){
    // $http.post('/api/children/'+childId+'/donations');
    $http({
      method: "post",
      url: '/api/children/'+childId+'/donations',
      data: donation,
    });//.success(){function(data) {return data}};
  };

  return factory;

}]);
