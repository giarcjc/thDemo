(function(){
	'use strict';

	/**@ngInject **/
	function PropertiesController($log, $filter, $state, $uibModal, PropertiesService){
	  var vm = this;

      vm.modelOptions = {
        getterSetter: true,
        allowInvalid: true,
        updateOn: 'default blur',
        debounce: { 
          default: 300,
          blur: 0
        }
      };

	  PropertiesService.getProperties()
	  	.then(function(result){
			vm.properties = result;
		});

	  	vm.deleteProperty = function(property){
	  	  var modalInstance = $uibModal.open({
          	controller: "DeletePropertyConfController as vm",
          	templateUrl: 'app/properties/delete-property-conf.html',
          	size: 'lg',
          	resolve: {
            	prop: function () {
              	  return {
              	  	id: property.id,
              	  	address1: property.address1
              	  };
            	}
	        }
	      });

	  	  modalInstance.result
            .then(function() {
              $state.reload();
            }, function(err) {
             $log.info(err);
            });
	  	}
	}

	angular.module('thDemo')
	.controller('PropertiesController', PropertiesController)
})();