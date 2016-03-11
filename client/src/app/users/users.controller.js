(function(){
	'use strict';

	/**@ngInject **/
	function UsersController(){
	  var vm = this;
	  vm.test = 'Users test';
	}


	angular.module('thDemo')
	.controller('UsersController', UsersController)
})();