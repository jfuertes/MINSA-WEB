(function(){

'use strict';

var app = angular.module('eissonApp', [
  'ngRoute',
  'ngAnimate',
  'angular-loading-bar',
  'ui.materialize',
  'Controllers']);

    app.config(['$routeProvider', 'cfpLoadingBarProvider',function($routeProvider, cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeSpinner   = true;
      cfpLoadingBarProvider.latencyThreshold = 1;

      $routeProvider.
        when('/consultar', {
          templateUrl: 'views/home.html',
          caseInsensitiveMatch: true,
          controller: 'HomeController',
          activetab: 'consultar'
        }).
        when('/vacunas', {
          templateUrl: 'views/vacunas.html',
          caseInsensitiveMatch: true,
          controller: 'VacunasController',
          activetab: 'vacunas'
        }).
        when('/centros', {
          templateUrl: 'views/centros.html',
          caseInsensitiveMatch: true,
          controller: 'CentrosController',
          activetab: 'centros'
        }).
        when('/acerca', {
          templateUrl: 'views/acerca.html',
          caseInsensitiveMatch: true,
          controller: 'AcercaController',
          activetab: 'acerca'
        }).
        when('/login', {
          templateUrl: 'views/login.html',
          caseInsensitiveMatch: true,
          controller: 'LoginController',
          activetab: 'login'
        }).
        otherwise({
          redirectTo: '/acerca'
        });

      }]);

})();