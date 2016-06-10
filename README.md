# CommentWidget

[![Build Status via Travis CI](https://travis-ci.org/mo3taz-abdallh/angular-commentWidget.svg?branch=master)](https://travis-ci.org/mo3taz-abdallh/angular-commentWidget)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/mo3taz-abdallh/angular-commentWidget)

angular-commentWidget provides you with interactive communication with your audience.

# Demo
[Demo](http://mo3taz-abdallh.github.io/angular-commentWidget/)

# Client Side

# Installation through bower

```javascript
$ bower install angular-commentWidget
```
Add Module dependency in your main app module

```javascript
angular
    .module('YourMainModule', ['commentWidget']);
```

Use comment-widget directive

```javascript
    <div class="comment-widget-main-badges" comment-widget-badges></div>
    <div class="comment-widget-main-input" comment-widget-input></div>
    <div class="comment-widget-main-list" comment-widget-list></div>
```

Place src/config/app-config.json
```javascript
    "app_id": "APP ID",
    "base_url":"SERVER SIDE URL"
```
Note: you would have interface for creating new app soon.

# Server NodeJs Backend

Refer to [git-repo](https://github.com/mo3taz-abdallh/angular-commentWidget-server)
