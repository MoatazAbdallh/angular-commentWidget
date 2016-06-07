/**
 * Created by Moataz on 6/4/2016.
 */

(function () {
  'use strict';
  angular.module("commentWidget")
    .service("CommentsList", CommentsList);

  /* @ngInject */
  function CommentsList($http, $q) {
    var CONFIG = null;
    $http.get("config/app-config.json").then(function (result) {
      CONFIG = result.data;
    }, function (err) {
      toastr.error("Sorry Couldn't load Config File", 'Error');
    });
    this.getAppComments = function () {
      var deferred = $q.defer();
      $http({
        url: CONFIG.base_url + "get-comment-list",
        method: "POST",
        data: {'app_id': CONFIG.app_id},
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        deferred.resolve(result.data.data);
      }, function (err) {
        toastr.error("Sorry Couldn't load App Info Please Try Again Later", 'Error');
        deferred.reject(err.message);
      });
      return deferred.promise;
    };

    this.getAppInfo = function () {
      var deferred = $q.defer();
      $http({
        url: CONFIG.base_url + "get-app-info",
        method: "POST",
        data: {'app_id': CONFIG.app_id},
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        deferred.resolve(result.data.data);
      }, function (err) {
        toastr.error("Sorry Couldn't load App Info Please Try Again Later", 'Error');
        deferred.reject(err.message);
      });
      return deferred.promise;
    }
  }
})();
