angular.module('ngCordova.plugins.camera', [])

.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(imageData) {
        // Do any magic you need
        q.resolve(imageData);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    },
    cleanup: function(options) {
      var q = $q.defer();
      navigator.camera.cleanup(function() {
        // Do any magic you need
        q.resolve(arguments);
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    }
    
  }
}]);
