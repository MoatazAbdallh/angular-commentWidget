/**
 * Created by Moataz on 6/4/2016.
 */
(function () {
  'use strict';
  angular.module("commentWidget")
    .directive("commentWidgetList", commentWidgetList);

  /* @ngInject */
  function commentWidgetList(CommentsList, moment, $rootScope) {
    return {
      restrict: "EA",
      templateUrl: "app/components/directives/comment-widget-list/comment-widget-list.html",
      scope: {
        appName: "="
      },
      controller: CommentWidgetController,
      controllerAs: 'vm',
      bindToController: true
    };
    function CommentWidgetController() {
      var vm = this;
      vm.updateCommentItem = updateCommentItem;
      CommentsList.getAppComments().then(function (result) {
        vm.commentList = result.map(function (commentItem) {
          commentItem.creation_date = moment(commentItem.creation_date).format("DD-MM-YYYY HH:MM")
          return commentItem
        });

      });
      function updateCommentItem(type, commentItem) {
        if (type == "up") {
          commentItem.points_up++
        }
        else
          commentItem.points_down++;

        CommentsList.updateCommentItem(commentItem);
      }

      $rootScope.$on("ADDED_NEW_COMMENT", function (event,args) {
        vm.commentList.push(args);
      });
    }
  }
})();
