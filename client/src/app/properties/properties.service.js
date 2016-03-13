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

      service.updateProperty = function(property){
        return Property.get(property.id)
          .then(function(result){
            result.address1 = property.address1,
            result.address2 = property.address2,
            result.city = property.city, 
            result.state = property.state,
            result.zip = property.zip,
            result.kind = property.kind
            result.update();
          });
      }   

  	  service.deleteProperty = function(id){
        return Property.get(id)
          .then(function(result){
              result.delete();
          })
  	  }	

	}


	angular.module('thDemo')
	.service('PropertiesService', PropertiesService)
})();