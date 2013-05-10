/// <reference path="../../../vendor/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../../vendor/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../vendor/DefinitelyTyped/jasmine/jasmine.d.ts" />

/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe('home section', function () {
  beforeEach( module( 'ngBoilerplate.home' ) );

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));
});

