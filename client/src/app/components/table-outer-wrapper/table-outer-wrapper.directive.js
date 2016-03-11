(function() {
  'use strict';

  function tableOuterWrapper() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/components/table-outer-wrapper/table-outer-wrapper.html'
    };
  }

  angular.module('thDemo')
    .directive('tableOuterWrapper', tableOuterWrapper);
})();