(function() {
  'use strict';

  /** @ngInject */
  function MainController(Property) {
    var vm = this;

    vm.createProperty = function(property) {
       new Property({
            address1: property.address1,
            address2: property.address2,
            city: property.city, 
            state: property.state,
            postalcode: property.postalcode 
          }).create();
    };
       

  }

  angular
    .module('thDemo')
    .controller('MainController', MainController);

})();
