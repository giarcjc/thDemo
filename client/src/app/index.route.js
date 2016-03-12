(function() {
  'use strict';

  angular
    .module('thDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'vm'
      }) 
      .state('properties', {
        url: '/properties',
        templateUrl: 'app/properties/properties.html',
        controller: 'PropertiesController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
      });
  }

})();
