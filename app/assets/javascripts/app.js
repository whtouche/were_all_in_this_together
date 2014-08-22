var myApp = angular.module("waitt", []);
myApp.controller("waittController", function($scope){
  $scope.hiBen = "hey how are you ben?";
});
myApp.controller("childrenController", function($scope){
  $scope.children = [
      {
        id: 1,
        name:'Davina',
        donations: [
          {
            id: 1,
            message: 'happy birthday',
            total: 25
          }
        ]
      },
      {
        id: 2,
        name:'Grace',
        donations: [
          {
            id: 2,
            message: 'merry christmas',
            total: 15
          },
          {
            id: 3,
            message: 'I have too much money',
            total: 1000
          }
        ]
      },
    ];
});
