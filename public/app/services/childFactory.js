myApp.factory("childFactory", ['$http', function($http){

  var factory = {};

  factory.getChildren = function(){
    return $http.get('/api/children/');
  };

  factory.getChild = function(childId){
    return $http.get('/api/children/'+childId);
  };

  return factory;

}]);


// roadTripApp.factory('albumFactory', ['$http', function($http){
//   var factory = {};
//
//   factory.getAlbums = function(gender){
//     return $http.get("/api/"+username+"/albums")
//   };
//
//   factory.getPhotos = function(username,album_title){
//     return $http.get("/api/"+username+"/albums/"+album_title+'/photos')
//   };
//
//   return factory;
// }]);
