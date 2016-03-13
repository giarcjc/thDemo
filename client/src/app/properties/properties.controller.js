(function(){
	'use strict';

	/**@ngInject **/
	function PropertiesController($log, $filter, $state, PropertiesService){
	  var vm = this;

	  // var orderBy = $filter('orderBy');

      vm.modelOptions = {
        getterSetter: true,
        allowInvalid: true,
        updateOn: 'default blur',
        debounce: { // <-- can be an object as well
          default: 300,
          blur: 0
        }
      };

	  PropertiesService.getProperties()
	  	.then(function(result){
			vm.properties = result;
		});

	  	vm.deleteProperty = function(id){
	  	  $log.info(id);
	  	  return PropertiesService.deleteProperty(id)
	  	  	.then(function(){
	  	  		 $state.reload();
	  	  	});
	  	}

	}


	angular.module('thDemo')
	.controller('PropertiesController', PropertiesController)
})();