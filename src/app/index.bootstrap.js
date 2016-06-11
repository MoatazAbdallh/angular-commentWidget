(function () {
  'use strict';
  var initInjector = angular.injector(["ng"]);
  var $http = initInjector.get("$http");

  $http.get("config/app-config.json").then(function (result) {
    angular
      .module('commentWidget')
      .constant('CONFIG', result.data);
    angular.bootstrap(document, ["commentWidget"]);
  }, function (err) {
    angular
      .module('commentWidget')
      .constant('CONFIG', {});
    alert("Sorry Couldn't load Config File");
  });
})();
