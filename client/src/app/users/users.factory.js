(function(){
	'use strict';

	/**@ngInject **/
	function User(railsResourceFactory){
	  return railsResourceFactory({
	    url: '/api/users',
	    name: 'users'
	  });
	}


	angular.module('thDemo')
	.factory('User', User)
})();