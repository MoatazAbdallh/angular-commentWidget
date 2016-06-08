/**
 * Created by Moataz on 6/4/2016.
 */

(function () {
  'use strict';
  angular.module("commentWidget")
    .service("CommentsList", CommentsList);

  /* @ngInject */
  function CommentsList($http, $q,toastr,CONFIG) {

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
        toastr.error("Sorry Couldn't load Comment List, Please Try Again Later", 'Error');
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
    };
    this.incrementRecommendation = function () {
      var deferred = $q.defer();
      $http({
        url: CONFIG.base_url + "increment-recommendation",
        method: "POST",
        data: {'app_id': CONFIG.app_id},
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        deferred.resolve(result.data.data);
      }, function (err) {
        toastr.error("Sorry Couldn't load Comments Recommendation count, Please Try Again Later", 'Error');
        deferred.reject(err.message);
      });
      return deferred.promise;
    };
    this.updateCommentItem = function (data) {
      var deferred = $q.defer();
      $http({
        url: CONFIG.base_url + "updateCommentItem",
        method: "POST",
        data: data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        deferred.resolve(result.data.data);
      }, function (err) {
        toastr.error("Sorry Couldn't update your response, Please Try Again Later", 'Error');
        deferred.reject(err.message);
      });
      return deferred.promise;
    };

    this.submitComment = function (data) {
      var deferred = $q.defer();
      var extendedData = angular.extend(data, {app_id: CONFIG.app_id});
      $http({
        url: CONFIG.base_url + "post-comment",
        method: "POST",
        data: extendedData,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        deferred.resolve(result.data.data);
      }, function (err) {
        toastr.error("Sorry Couldn't submit comment in mean time, Please Try Again Later", 'Error');
        deferred.reject(err.message);
      });
      return deferred.promise;
    };
  }
})();
