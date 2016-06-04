'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });


  it('should be more than 5 feature', function () {
    expect(page.appFeatures.count()).toBeGreaterThan(5);
  });

});
