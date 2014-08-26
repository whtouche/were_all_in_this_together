myApp.controller("donationController", ["$scope", "donationFactory", "$routeParams", "Auth", function($scope, donationFactory, $routeParams, Auth){

  var donationId = $routeParams.donationId;
  var childId = $routeParams.childId;

  $scope.createDonation = function(){
    donationFactory.createDonation(childId, $scope.newDonation);
  };

  $scope.showDonation = function(){
    donationFactory.getDonation(donationId).success( function(data){
      $scope.donation = data[0];
    })
    .error(function(data){
      console.log("ERROR: ");
    });
  };
}
]);
