(function(){
	'use strict';

	/**@ngInject **/
	function PropertiesService(Property){
	  var service = this;

	  service.getProperties = function(){
	  	return Property.query();
	  }

	  service.createProperty = function(property) {
    	return new Property({
            address1: property.address1,
            address2: property.address2,
            city: property.city, 
            state: property.state,
            zip: property.zip,
            kind: property.kind
          }).create();
  		}	

  	  service.getPropertyById = function(id){
  	  	return Property.get(id);
  	  }		

  	  // service.deleteProperty = function(id){
  	  // 	return Property.delete(id);
  	  // }	

	}


	angular.module('thDemo')
	.service('PropertiesService', PropertiesService)
})();