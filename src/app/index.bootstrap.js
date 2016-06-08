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
    toastr.error("Sorry Couldn't load Config File", 'Error');
  });
})();
