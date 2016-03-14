(function(){
	'use strict';

	/**@ngInject **/
	function DeletePropertyConfController($log, $uibModalInstance, prop, PropertiesService){
	  var vm = this;
	  vm.prop = prop;

      vm.cancel = function() {
      	$uibModalInstance.dismiss('cancel');
      };

	  vm.deleteProperty = function(id){
	  	return PropertiesService.deleteProperty(id)
	  	  .then(function(result){
	  	  	$uibModalInstance.close(result);
	  	  });
	  }
		
	}


	angular.module('thDemo')
	.controller('DeletePropertyConfController', DeletePropertyConfController)
})();