(function() {
  'use strict';

  angular
    .module('commentWidget')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
