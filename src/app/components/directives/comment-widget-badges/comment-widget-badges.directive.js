/**
 * Created by Moataz on 6/4/2016.
 */

/**
 * @ngdoc directive
 * @name commentWidget.directive:commentWidgetBadges
 * @scope
 * @restrict 'AE
 * @description This is directive responsible for showing comments count and recommendation count badges.
 */

(function () {
  'use strict';
  angular.module("commentWidget")
    .directive("commentWidgetBadges", commentWidgetBadges);

  /* @ngInject */
  function commentWidgetBadges(CommentsList) {
    return {
      restrict: "EA",
      templateUrl: "app/components/directives/comment-widget-badges/comment-widget-badges.html",
      scope: {
        appName: "="
      },
      controller: CommentWidgetBadgesController,
      controllerAs: 'vm',
      bindToController: true
    };

    /* @ngInject */
    function CommentWidgetBadgesController($scope) {
      var vm = this;
      CommentsList.getAppInfo().then(function (result) {
        vm.appInfo = result
      });
    }
  }
})();
