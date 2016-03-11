(function(){
	'use strict';

	/**@ngInject **/
	function PropertiesController(){
	  var vm = this;
	  vm.test = 'Properties ttest';
	}


	angular.module('thDemo')
	.controller('PropertiesController', PropertiesController)
})();