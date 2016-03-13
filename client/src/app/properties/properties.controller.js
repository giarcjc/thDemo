(function(){
	'use strict';

	/**@ngInject **/
	function PropertiesController($log, $filter, PropertiesService){
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



	}


	angular.module('thDemo')
	.controller('PropertiesController', PropertiesController)
})();