!function(){"use strict";angular.module("thDemo",["ngAnimate","rails","ngCookies","ngSanitize","ngMessages","ui.router","ui.bootstrap","toastr","jcs-autoValidate","xeditable"])}(),function(){"use strict";function e(){return{restrict:"E",transclude:!0,replace:!0,templateUrl:"app/components/table-outer-wrapper/table-outer-wrapper.html"}}angular.module("thDemo").directive("tableOuterWrapper",e)}(),function(){"use strict";function e(){return{restrict:"E",transclude:!0,templateUrl:"app/components/outer-wrapper/outer-wrapper.html"}}angular.module("thDemo").directive("outerWrapper",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html"};return e}angular.module("thDemo").directive("thNavbar",e)}(),function(){"use strict";function e(){}angular.module("thDemo").service("UsersService",e)}(),function(){"use strict";function e(e){return e({url:"/api/users",name:"users"})}e.$inject=["railsResourceFactory"],angular.module("thDemo").factory("User",e)}(),function(){"use strict";function e(){}angular.module("thDemo").controller("UsersController",e)}(),function(){"use strict";function e(e){return e({url:"/api/properties",name:"property"})}e.$inject=["railsResourceFactory"],angular.module("thDemo").factory("Property",e)}(),function(){"use strict";function e(e,t,r){var s=this;s.modelOptions={getterSetter:!0,allowInvalid:!0,updateOn:"default blur",debounce:{"default":300,blur:0}},r.getPropertyById(t.id).then(function(e){s.property=e}),s.updateProperty=function(){e.info("now property: "+s.property),r.updateProperty(s.property)}}e.$inject=["$log","$stateParams","PropertiesService"],angular.module("thDemo").controller("PropertyDetailController",e)}(),function(){"use strict";function e(e,t){var r=this;r.getProperties=function(){return t.query()},r.createProperty=function(e){return new t({address1:e.address1,address2:e.address2,city:e.city,state:e.state,zip:e.zip,kind:e.kind}).create()},r.getPropertyById=function(e){return t.get(e)},r.updateProperty=function(e){return t.get(e.id).then(function(t){t.address1=e.address1,t.address2=e.address2,t.city=e.city,t.state=e.state,t.zip=e.zip,t.kind=e.kind,t.update()})},r.deleteProperty=function(e){return r.getPropertyById(e).then(function(e){e["delete"]()})}}e.$inject=["$log","Property"],angular.module("thDemo").service("PropertiesService",e)}(),function(){"use strict";function e(e,t,r,s,o){var l=this;l.modelOptions={getterSetter:!0,allowInvalid:!0,updateOn:"default blur",debounce:{"default":300,blur:0}},o.getProperties().then(function(e){l.properties=e}),l.deleteProperty=function(t){var o=s.open({controller:"DeletePropertyConfController as vm",templateUrl:"app/properties/delete-property-conf.html",size:"lg",resolve:{prop:function(){return{id:t.id,address1:t.address1}}}});o.result.then(function(){r.reload()},function(t){e.info(t)})}}e.$inject=["$log","$filter","$state","$uibModal","PropertiesService"],angular.module("thDemo").controller("PropertiesController",e)}(),function(){"use strict";function e(e,t,r,s){var o=this;o.prop=r,o.cancel=function(){t.dismiss("cancel")},o.deleteProperty=function(e){return s.deleteProperty(e).then(function(e){t.close(e)})}}e.$inject=["$log","$uibModalInstance","prop","PropertiesService"],angular.module("thDemo").controller("DeletePropertyConfController",e)}(),function(){"use strict";function e(e,t,r,s){var o=this;o.validate=function(e){return e&&e.address1&&e.city&&e.state&&e.zip&&e.kind?e:!1},o.propertyKindOptions=["Apartment","Cabin","Condo","Single Family House","Townhouse"],o.createProperty=function(t){o.validate(t)?r.createProperty(t).then(function(t){t?(e.info(t),s.success("Property Created!","Success!")):s.error("Something went wrong!","Error!")}):s.error("There are invalid form fields!","Error!")}}e.$inject=["$log","Property","PropertiesService","toastr"],angular.module("thDemo").controller("MainController",e)}(),function(){"use strict";function e(){}angular.module("thDemo").run(e)}(),function(){"use strict";function e(e,t,r){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).state("properties",{url:"/properties",templateUrl:"app/properties/properties.html",controller:"PropertiesController",controllerAs:"vm"}).state("property-detail",{url:"/properties/:id",templateUrl:"app/properties/property-detail.html",controller:"PropertyDetailController",controllerAs:"vm"}),t.otherwise("/"),r.html5Mode({enabled:!0,requireBase:!1})}e.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("thDemo").config(e)}(),function(){"use strict";angular.module("thDemo").constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("thDemo").config(e)}(),angular.module("thDemo").run(["$templateCache",function(e){e.put("app/main/main.html",'<outer-wrapper><h3>Property Address</h3><div class="col-lg-12 col-md-12 col-sm-12"><div class="form col-lg-2 col-md-2 col-xs-2"><ul class="sidebar"><li>Overview</li><li>Description</li><li>Amenities</li><li>Pricing & Terms</li><li>Photos</li></ul></div><div class="form col-lg-10 col-md-10 col-xs-10"><h2>Create Property</h2><form role="form" name="property-form" ng-submit="vm.createProperty(vm.property)" novalidate=""><div class="row"><div class="col-md-9 col-xs-12 form-group"><label class="control-label" for="property_address1">Street Address:</label> <input id="property_address1" name="property_address1" class="form-control" placeholder="Enter a location" ng-model="vm.property.address1" required=""></div><div class="col-md-3 col-xs-12 form-group"><label class="control-label" for="property_address2">Apt, Suite, Building.</label> <input id="property_address2" name="property_address2" class="form-control" placeholder="optional" ng-model="vm.property.address2"></div></div><div class="row"><div class="col-md-6 col-xs-12 form-group"><label class="control-label" for="property_city">City:</label> <input id="property_city" name="property_city" class="form-control" placeholder="City" ng-model="vm.property.city" required=""></div><div class="col-md-3 col-xs-12 form-group"><label class="control-label" for="property_state">State:</label> <input id="property_state" name="property_state" class="form-control" placeholder="State" ng-model="vm.property.state" required=""></div><div class="col-md-3 col-xs-12 form-group"><label class="control-label" for="property_zip">Zip:</label> <input id="property_postalcode" name="property_zip" class="form-control" placeholder="Zip" ng-model="vm.property.zip" required=""></div></div><div class="col-md-3 col-xs-12 form-group"><label class="control-label" for="property_kind">Property Type:</label><div ng-repeat="kind in vm.propertyKindOptions"><div class="row"><span>{{kind}} <input type="radio" ng-model="vm.property.kind" value="{{kind}}" class="pull-right" required=""></span></div></div></div><div class="row"><button id="save-property-btn" type="submit" class="pull-right btn btn-succeess">Save</button></div></form></div></div></outer-wrapper>'),e.put("app/properties/delete-property-conf.html",'<div class="modal-header"><h1 class="modal-title">Delete Property</h1></div><div class="modal-body"><p>Are you certain you want to delete the property at <strong>{{vm.prop.address1}}</strong>?</p></div><div class="modal-footer"><a class="modal-cancel" href="" ng-click="vm.cancel()">Cancel</a> <button class="btn btn-primary modal-submit" ng-click="vm.deleteProperty(vm.prop.id)">Delete</button></div>'),e.put("app/properties/properties.html",'<outer-wrapper><div class="col-lg-10 col-md-10"><form name="searchform" class="navbar-left search-container" role="search"><div class="form-group"><div class="property-search"><input ng-model="searchTerm.$" id="searchTerm" type="text" class="form-control" placeholder="Search" ng-minlength="3" ng-change="vm.showResults(searchTerm)" ng-model-options="vm.modelOptions"></div></div></form><div class="table-results pull-right"><p>{{vm.filteredproperties.length}} Total Properties</p></div></div><div class="col-lg-10 col-md-10"><table id="properties-table" st-table="vm.properties" class="table table-fixed table-striped table-hover table-responsive col-xs-10 col-sm-10"><thead><tr class="table-header"><th st-sort="assetId" class="col-xs-1 col-sm-1 left-justified">ID</th><th st-sort="type" class="col-xs-1 col-sm-1 left-justified">Property Type</th><th st-sort="name" st-sort-default="true" class="col-xs-2 col-sm-2">Address 1</th><th st-sort="name" st-sort-default="true" class="col-xs-1 col-sm-1">Address 2</th><th st-sort="totalShares" class="col-xs-1 col-sm-1 right-justified">City</th><th st-sort="pricePerShare" class="col-xs-1 col-sm-1 right-justified">State</th><th st-sort="totalValue" class="col-xs-1 col-sm-1 right-justified">Postal Code</th><th class="col-xs-1 col-sm-1"></th></tr></thead><tbody><tr ng-repeat="row in vm.filteredproperties = ( vm.properties | filter:searchTerm)" class="table-row-height"><td class="col-xs-1 col-sm-1 table-header-container left-justified">{{row.id}}</td><td class="col-xs-1 col-sm-1 table-header-container left-justified">{{row.kind}}</td><td class="col-xs-2 col-sm-2 table-header-container left-justified"><a ui-sref="property-detail({id:row.id})">{{row.address1}}</a></td><td class="col-xs-1 col-sm-1 table-header-container right-justified">{{row.address2}}</td><td class="col-xs-1 col-sm-1 table-header-container right-justified">{{row.city}}</td><td class="col-xs-1 col-sm-1 table-header-container right-justified">{{row.state}}</td><td class="col-xs-1 col-sm-1 table-header-container center-justified">{{row.zip}}</td><td class="col-xs-1 col-sm-1 text-right table-header-container-null"><a href="#" ng-click="vm.deleteProperty(row)">Delete</a></td></tr></tbody></table></div></outer-wrapper>'),e.put("app/properties/property-detail.html",'<outer-wrapper><h2 class="col-md-5">Details for Property</h2><div class="data-container col-xs-12 form-group"><fieldset><div class="row"><div class="col-xs-6"><div class="edit-label col-xs-2">Address 1</div><div editable-text="vm.property.address1" id="address1" e-name="address1" class="editAreaText col-xs-4" onaftersave="vm.updateProperty()">{{ vm.property.address1 || \'Not set\' }}</div></div><div class="col-xs-6"><div class="edit-label col-xs-2">Address 2</div><div editable-text="vm.property.address2" id="address2" e-name="address2" class="editAreaText col-xs-4" onaftersave="vm.updateProperty()">{{ vm.property.address2 || \'Not set\' }}</div></div></div><div class="row"><div class="col-xs-6"><div class="edit-label col-xs-2">City</div><div editable-text="vm.property.city" id="city" e-name="city" class="editAreaText col-xs-4" onaftersave="vm.updateProperty()">{{ vm.property.city || \'Not set\' }}</div></div><div class="col-xs-6"><div class="edit-label col-xs-2">State</div><div editable-text="vm.property.state" id="state" e-name="state" class="editAreaText col-xs-4" onaftersave="vm.updateProperty()">{{ vm.property.state || \'Not set\' }}</div></div></div><div class="row"><div class="col-xs-6"><div class="edit-label col-xs-2">Zip</div><div editable-text="vm.property.zip" id="zip" e-name="zip" class="editAreaText col-xs-4" onaftersave="vm.updateProperty()">{{ vm.property.zip || \'Not set\' }}</div></div><div class="col-xs-6"><div class="edit-label col-xs-2">Property Type</div><div editable-text="vm.property.kind" id="kind" e-name="kind" class="editAreaText col-xs-4" onaftersave="vm.updateProperty()">{{ vm.property.kind || \'Not set\' }}</div></div></div></fieldset></div></outer-wrapper>'),e.put("app/users/users.html",'<outer-wrapper>{{vm.test}}<table id="users-table" st-table="vm.users" class="table table-fixed table-striped table-hover table-responsive"><thead><tr class="table-header"><th st-sort="assetId" class="col-xs-1 col-sm-1 left-justified">ID</th><th st-sort="type" class="col-xs-2 col-sm-2 left-justified">Property Type</th><th st-sort="name" st-sort-default="true" class="col-xs-2 col-sm-2">Address 1</th><th st-sort="name" st-sort-default="true" class="col-xs-2 col-sm-2">Address 2</th><th st-sort="totalShares" class="col-xs-2 col-sm-2 right-justified">City</th><th st-sort="pricePerShare" class="col-xs-1 col-sm-1 right-justified">State</th><th st-sort="totalValue" class="col-xs-2 col-sm-2 right-justified">Postal Code</th><th class="col-xs-1 col-sm-1"></th></tr></thead><tbody><tr ng-repeat="row in vm.filteredusers= ( vm.users | filter: vm.search)" class="table-row-height"><td class="col-xs-2 col-sm-2 table-header-container left-justified">{{row.id}}</td><td class="col-xs-2 col-sm-2 table-header-container left-justified">{{row.type}}</td><td class="col-xs-1 col-sm-1 table-header-container left-justified">{{row.address1}}</td><td class="col-xs-2 col-sm-2 table-header-container right-justified">{{row.address2}}</td><td class="col-xs-1 col-sm-1 table-header-container right-justified">{{row.city}}</td><td class="col-xs-2 col-sm-2 table-header-container right-justified">{{row.state}}</td><td class="col-xs-1 col-sm-1 table-header-container center-justified">{{row.zip}}</td><td class="col-xs-1 col-sm-1 text-right table-header-container-null"></td></tr></tbody></table><div class="table-results"><p>{{vm.filteredusers.length}} Total Properties</p></div></outer-wrapper>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top header-menu"><div class="container-fluid header-menu-section"><div class="navbar-header header-logo"><a href="http://travelershaven.com/"></a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li><a ui-sref="home">Add a Property</a></li><li><a ui-sref="properties">View Properties</a></li></ul></div></div></nav>'),e.put("app/components/outer-wrapper/outer-wrapper.html",'<div><th-navbar></th-navbar></div><div class="container-fluid" ng-transclude=""></div>'),e.put("app/components/table-outer-wrapper/table-outer-wrapper.html",'<div class="container-fluid tableWrapper"><div class="row"><div id="content-container" class="panel panel-default table-wrapper" ng-transclude=""></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-d558f8f6d6.js.map