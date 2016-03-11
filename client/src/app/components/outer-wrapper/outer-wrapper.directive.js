(function() {
  'use strict';

  function outerWrapper() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/outer-wrapper/outer-wrapper.html'
    };
  }

  angular.module('thDemo')
    .directive('outerWrapper', outerWrapper);
})();