/// <reference path="../../vendor/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
/// <reference path="../../vendor/DefinitelyTyped/jasmine/jasmine.d.ts" />

describe('AppCtrl', function () {
  describe( 'isCurrentUrl', function() {
    var AppCtrl, $location, $scope;

    beforeEach( module( 'ngBoilerplate' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( AppCtrl ).toBeTruthy();
    }));
  });
});
