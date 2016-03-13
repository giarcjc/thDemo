(function(){
	'use strict';

	/**@ngInject **/
	function PropertiesController($log, PropertiesService){
	  var vm = this;
	  vm.test = 'Properties ttest';

	  PropertiesService.getProperties()
	  	.then(function(result){
			vm.properties = result;
		});



	}


	angular.module('thDemo')
	.controller('PropertiesController', PropertiesController)
})();