'use strict';

angular.module("tTimeApp")
  .factory('Episodes', $resource => {
    console.log("episode factory");
    return $resource('api/episodes/', {id: '@id'}, {});
  });
