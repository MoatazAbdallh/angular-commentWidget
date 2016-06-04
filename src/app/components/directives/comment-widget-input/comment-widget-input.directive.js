/**
 * Created by Moataz on 6/4/2016.
 */

/**
 * @ngdoc directive
 * @name commentWidget.directive:CommentWidgetInput
 * @scope
 * @restrict 'AE
 * @description This is directive responsible for any comment input.
 */

(function () {
  'use strict';
  angular.module("commentWidget")
    .directive("commentWidgetInput", commentWidgetInput);

  /* @ngInject */
  function commentWidgetInput(CommentsList) {
    return {
      restrict: "EA",
      templateUrl: "app/components/directives/comment-widget-input/comment-widget-input.html",
      scope: {
        appName: "="
      },
      controller: CommentWidgetInputController,
      controllerAs: 'vm',
      bindToController: true
    };


    /* @ngInject */
    function CommentWidgetInputController($rootScope) {
      var vm = this;
      vm.appInfo = CommentsList.getAppInfo();

    }
  }
})();
