myApp.controller("donationController", ["$scope", "donationFactory", "$routeParams", "Auth", function($scope, donationFactory, $routeParams, Auth){

  var donationId = $routeParams.donationId;

  donationFactory.getDonation(donationId).success( function(data){
    $scope.donation = data;
  })
  .error(function(data){
    console.log("ERROR: ");
  });
 }

]);
