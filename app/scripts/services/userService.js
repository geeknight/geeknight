'use strict';

angular.module('geeknightApp').service('userService', function userService() {
    return {
        isLogged: false,
        username: null
      };
  });