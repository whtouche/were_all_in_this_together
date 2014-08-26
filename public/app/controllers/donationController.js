myApp.controller("donationController", ["$scope", "donationFactory", "$routeParams", "Auth", function($scope, donationFactory, $routeParams, Auth){

  var donationId = $routeParams.donationId;
  var childId = $routeParams.childId;

  $scope.createDonation = function(){
    donationFactory.createDonation(childId, $scope.newDonation).
    success( function(){
      $scope.getChildDonations();
    });
  };

  $scope.showDonation = function(){
    donationFactory.getDonation(childId, donationId)
    .success( function(data){
      console.log(data);
      $scope.donation = data;
    })
    .error(function(data){
      console.log("ERROR: ");
    });
  };
}
]);
