/**
 * Page Object Pattern
 */

'use strict';

var MainPage = function() {
  this.appFeatures = element.all(by.css('.container .app-features div'));
};

module.exports = new MainPage();
