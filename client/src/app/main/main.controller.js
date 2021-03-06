(function() {
  'use strict';

  /** @ngInject */
  function MainController($log, Property, PropertiesService, toastr) {
    var vm = this;

    vm.validate = function(p){
      if(!p || !p.address1 || !p.city || !p.state || !p.zip || !p.kind ){
        return false; 
      } else {
        return p; 
      }
    }

     vm.propertyKindOptions= [
        'Apartment',
        'Cabin',
        'Condo',
        'Single Family House',
        'Townhouse'
      ]

    vm.createProperty = function(property) {
      if(vm.validate(property)){
       PropertiesService.createProperty(property)
         .then(function(response){
          if(response){
            $log.info(response);
            toastr.success('Property Created!', 'Success!');
          } else {
            toastr.error('Something went wrong!', 'Error!');
          }
        })
      } else {
        toastr.error('There are invalid form fields!', 'Error!');
      }
    };
  }

  angular
    .module('thDemo')
    .controller('MainController', MainController);

})();
