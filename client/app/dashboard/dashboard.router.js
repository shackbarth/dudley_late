'use strict';

angular.module('tTimeApp.dashboard')
  .config(function($stateProvider) {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'vm'
    });
  });
