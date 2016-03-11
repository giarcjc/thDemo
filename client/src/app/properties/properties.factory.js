(function(){
	'use strict';

	/**@ngInject **/
	function Property(railsResourceFactory){
	  return railsResourceFactory({
	    url: '/api/properties',
	    name: 'properties'
	  });
	}


	angular.module('thDemo')
	.factory('Property', Property)
})();