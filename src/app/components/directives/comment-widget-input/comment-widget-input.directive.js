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
      vm.submitComment = submitComment;
      vm.updateComment_txt = updateComment_txt;

      function submitComment(){
        var data = {};
        data.comment_txt = vm.comment_txt;
        data.user_name = vm.user_name;
        CommentsList.submitComment(data).then(function(result){
          $rootScope.$broadcast("ADDED_NEW_COMMENT",result)
        })
      }
      function updateComment_txt(){
        vm.comment_txt = document.querySelector(".textfield").innerHTML.replace("&nbsp;","").trim();
      }
    }
  }
})();
