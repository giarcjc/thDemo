(function(){
	'use strict';

	/**@ngInject **/
	function PropertyDetailController($log, $stateParams, PropertiesService){
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

	  PropertiesService.getPropertyById($stateParams.id)
	  	.then(function(result){
			vm.property = result;
		});




	}


	angular.module('thDemo')
	.controller('PropertyDetailController', PropertyDetailController)
})();