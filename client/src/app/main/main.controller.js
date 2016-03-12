(function() {
  'use strict';

  /** @ngInject */
  function MainController($log, Property, toastr) {
    var vm = this;

     vm.propertyKindOptions= [
        'Apartment',
        'Cabin',
        'Condo',
        'Single Family House',
        'Townhouse'
      ]

    vm.createProperty = function(property) {
      $log.info('ok so far')
       new Property({
            address1: property.address1,
            address2: property.address2,
            city: property.city, 
            state: property.state,
            zip: property.zip,
            kind: property.kind
          }).create().then(function(response){
            if(response){
              $log.info(response);
              toastr.success('Property Created!', 'Success!');
            } else {
              toastr.error('Something went wrong!', 'Error!');
            }
        })
    };
       

  }

  angular
    .module('thDemo')
    .controller('MainController', MainController);

})();
