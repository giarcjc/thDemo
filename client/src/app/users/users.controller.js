(function(){
	'use strict';

	/**@ngInject **/
	function UsersController(User){
	  var vm = this;
	  vm.test = 'Users test';
	}

	 User.query().then(function(result){
			vm.users = result;
		});



	angular.module('thDemo')
	.controller('UsersController', UsersController)
})();