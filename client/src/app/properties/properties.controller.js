(function(){
	'use strict';

	/**@ngInject **/
	function PropertiesController(Property){
	  var vm = this;
	  vm.test = 'Properties ttest';

	  Property.query().then(function(result){
			vm.properties = result;
		});



	}


	angular.module('thDemo')
	.controller('PropertiesController', PropertiesController)
})();