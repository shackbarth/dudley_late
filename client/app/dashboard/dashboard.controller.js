'use strict';

(function() {

  class DashboardController {
    constructor($http, $scope) {
      console.log($http);
      $http({
        method: 'GET',
        url: '/api/episodes'
      }).then(function successCallback(response) {
        $scope.episodes = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  angular.module('tTimeApp')
    .controller('DashboardController', DashboardController);
})();
