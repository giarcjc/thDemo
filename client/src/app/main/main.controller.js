(function() {
  'use strict';

  /** @ngInject */
  function MainController($log) {
    var vm = this;
    $log.info('hey!');
    $log.info(vm);
     vm.test = 'test';

    // vm.showToastr = function(){
    //   $log.info('hey!');
    // }

    // vm.createProperty = function(property) {
    //   $log.info('ok so far')

    //    new Property({
    //         address1: property.address1,
    //         address2: property.address2,
    //         city: property.city, 
    //         state: property.state,
    //         postalcode: property.postalcode 
    //       }).create();
    // };
       

  }

  angular
    .module('thDemo')
    .controller('MainController', MainController);

})();
