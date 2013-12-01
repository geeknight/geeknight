'use strict';

describe('Controller: ParticipateCtrl', function () {

  // load the controller's module
  beforeEach(module('geeknightApp'));

  var ParticipateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParticipateCtrl = $controller('ParticipateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
