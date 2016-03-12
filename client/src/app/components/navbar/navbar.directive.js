(function() {
  'use strict';

  angular
    .module('thDemo')
    .directive('thNavbar', thNavbar);

  /** @ngInject */
  function thNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;

  }

})();
