!function(){"use strict";angular.module("commentWidget",["ngAnimate","ui.router","toastr"])}(),function(){"use strict";function t(t,e,n){function i(){function i(e,n){"up"==e?n.points_up++:n.points_down++,t.updateCommentItem(n)}var a=this;a.updateCommentItem=i,t.getAppComments().then(function(t){a.commentList=t.map(function(t){return t.creation_date=e(t.creation_date).format("DD-MM-YYYY HH:MM"),t})}),n.$on("ADDED_NEW_COMMENT",function(t,e){a.commentList.push(e)})}return{restrict:"EA",templateUrl:"app/components/directives/comment-widget-list/comment-widget-list.html",scope:{appName:"="},controller:i,controllerAs:"vm",bindToController:!0}}t.$inject=["CommentsList","moment","$rootScope"],angular.module("commentWidget").directive("commentWidgetList",t)}(),function(){"use strict";function t(t){function e(e){function n(){var n={};n.comment_txt=a.comment_txt,n.user_name=a.user_name,t.submitComment(n).then(function(t){e.$broadcast("ADDED_NEW_COMMENT",t)})}function i(){a.comment_txt=document.querySelector(".textfield").innerHTML.replace("&nbsp;","").trim()}var a=this;a.appInfo=t.getAppInfo(),a.submitComment=n,a.updateComment_txt=i}return e.$inject=["$rootScope"],{restrict:"EA",templateUrl:"app/components/directives/comment-widget-input/comment-widget-input.html",scope:{appName:"="},controller:e,controllerAs:"vm",bindToController:!0}}t.$inject=["CommentsList"],angular.module("commentWidget").directive("commentWidgetInput",t)}(),function(){"use strict";function t(t){function e(e){function n(){t.incrementRecommendation().then(function(){i.appInfo.recommendation_count++})}var i=this;i.incrementRecommendation=n,t.getAppInfo().then(function(t){i.appInfo=t})}return e.$inject=["$scope"],{restrict:"EA",templateUrl:"app/components/directives/comment-widget-badges/comment-widget-badges.html",scope:{appName:"="},controller:e,controllerAs:"vm",bindToController:!0}}t.$inject=["CommentsList"],angular.module("commentWidget").directive("commentWidgetBadges",t)}(),function(){"use strict";function t(){}angular.module("commentWidget").controller("MainController",t)}(),function(){"use strict";function t(t,e,n,i){this.getAppComments=function(){var a=e.defer();return t({url:i.base_url+"get-comment-list",method:"POST",data:{app_id:i.app_id},headers:{"Content-Type":"application/json"}}).then(function(t){a.resolve(t.data.data)},function(t){n.error("Sorry Couldn't load Comment List, Please Try Again Later","Error"),a.reject(t.message)}),a.promise},this.getAppInfo=function(){var a=e.defer();return t({url:i.base_url+"get-app-info",method:"POST",data:{app_id:i.app_id},headers:{"Content-Type":"application/json"}}).then(function(t){a.resolve(t.data.data)},function(t){n.error("Sorry Couldn't load App Info Please Try Again Later","Error"),a.reject(t.message)}),a.promise},this.incrementRecommendation=function(){var a=e.defer();return t({url:i.base_url+"increment-recommendation",method:"POST",data:{app_id:i.app_id},headers:{"Content-Type":"application/json"}}).then(function(t){a.resolve(t.data.data)},function(t){n.error("Sorry Couldn't load Comments Recommendation count, Please Try Again Later","Error"),a.reject(t.message)}),a.promise},this.updateCommentItem=function(a){var o=e.defer();return t({url:i.base_url+"updateCommentItem",method:"POST",data:a,headers:{"Content-Type":"application/json"}}).then(function(t){o.resolve(t.data.data)},function(t){n.error("Sorry Couldn't update your response, Please Try Again Later","Error"),o.reject(t.message)}),o.promise},this.submitComment=function(a){var o=e.defer(),r=angular.extend(a,{app_id:i.app_id});return t({url:i.base_url+"post-comment",method:"POST",data:r,headers:{"Content-Type":"application/json"}}).then(function(t){o.resolve(t.data.data)},function(t){n.error("Sorry Couldn't submit comment in mean time, Please Try Again Later","Error"),o.reject(t.message)}),o.promise}}t.$inject=["$http","$q","toastr","CONFIG"],angular.module("commentWidget").service("CommentsList",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("commentWidget").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/states/main/main.html",controller:"MainController",controllerAs:"vm"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("commentWidget").config(t)}(),function(){"use strict";angular.module("commentWidget").constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("commentWidget").config(t)}(),function(){"use strict";var t=angular.injector(["ng"]),e=t.get("$http");e.get("config/app-config.json").then(function(t){angular.module("commentWidget").constant("CONFIG",t.data),angular.bootstrap(document,["commentWidget"])},function(t){toastr.error("Sorry Couldn't load Config File","Error")})}(),angular.module("commentWidget").run(["$templateCache",function(t){t.put("app/states/main/main.html",'<div class="container"><div class="header-intro-container"><div class="app-title">Interactive Comment Widget</div><div class="app-description">ICW provides effective way to communicate with your audience</div><div class="app-features"><div class="app-feature-1">Built with AngularJS, SASS & Gulp</div><div class="app-feature-2">Provided as directive component for easily installation</div><div class="app-feature-3">Responsive Design</div><div class="app-feature-4">NodeJS & Mongo <i class="fa fa-database" aria-hidden="true"></i> for server side handling</div><div class="app-feature-5">Travis Integration for building & test over <i class="fa fa-github" aria-hidden="true"></i></div><div class="app-feature-6">Karma unit-test with HTML Reporter, Protractor behavioral test driven</div></div><div class="app-btns-wrapper"><a href="#demo-wrapper" class="app-tryit-btn">Try It Now</a> <a href="https://gitter.im/mo3taz-abdallh/angular-commentWidget" target="_blank" class="app-gitter-chat-btn">Join Gitter Repo Chat</a></div></div><div class="comment-widget-wrapper" id="demo-wrapper"><div class="comment-widget-main-badges" comment-widget-badges=""></div><div class="comment-widget-main-input" comment-widget-input=""></div><div class="comment-widget-main-list" comment-widget-list=""></div></div></div>'),t.put("app/components/directives/comment-widget-badges/comment-widget-badges.html",'<div class="comment-widget-badges-wrapper"><div class="comments-count-wrapper"><span class="comments-count" data-badge="{{vm.appInfo.comments_count}}">Comments</span></div><div class="recommendation-count-wrapper"><span class="comments-count" data-badge="{{vm.appInfo.recommendation_count}}">Recommendation</span> <i class="fa fa-chevron-up" aria-hidden="true" ng-click="vm.incrementRecommendation()"></i></div></div>'),t.put("app/components/directives/comment-widget-input/comment-widget-input.html",'<div class="comment-widget-input-wrapper"><div class="textfield" contenteditable="PLAINTEXT-ONLY" placeholder="Join the discussion…" style="overflow: auto; max-height: 350px;" ng-focus="vm.showAuth=true" ng-blur="vm.updateComment_txt()" ng-model="vm.comment_txt"></div><div class="auth-wrapper" ng-if="vm.showAuth"><div class="auth-social"><i class="fa fa-facebook-official" aria-hidden="true"></i> <i class="fa fa-twitter-square" aria-hidden="true"></i> <i class="fa fa-google-plus-square" aria-hidden="true"></i></div><div class="auth-username"><input type="text" placeholder="User Name" ng-model="vm.user_name"><div class="save-comment-wrapper" ng-click="vm.submitComment()"><a class="save-comment-btn">Submit</a></div></div></div></div>'),t.put("app/components/directives/comment-widget-list/comment-widget-list.html",'<div class="comment-widget-list-wrapper"><div ng-repeat="commentItem in vm.commentList" class="comment-item-wrapper"><div class="user-info"><div class="avatar-img"></div><div class="user-name" ng-bind="commentItem.user_name"></div></div><div class="comment-main-wrapper"><div class="comment-txt" ng-bind="commentItem.comment_txt"></div><div class="comment-interaction"><div class="thumb-up-wrapper"><i class="fa fa-thumbs-up" aria-hidden="true" ng-click="vm.updateCommentItem(\'up\',commentItem)"><span ng-bind="commentItem.points_up"></span></i></div><div class="thumb-down-wrapper"><i class="fa fa-thumbs-down" aria-hidden="true" ng-click="vm.updateCommentItem(\'down\',commentItem)"><span ng-bind="commentItem.points_down"></span></i></div><div class="share"><i class="fa fa-share-alt" aria-hidden="true"></i></div><div class="creation-date"><i class="fa fa-calendar" aria-hidden="true"><span ng-bind="commentItem.creation_date"></span></i></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app.js.map