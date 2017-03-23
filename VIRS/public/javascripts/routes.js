// Angular Routing
app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
     
     $stateProvider
        .state('home', { //State for home page (Initial page)
          url: '/home',
          templateUrl: '/home.html',
          controller: 'HomeCtrl'
        })
        .state('landing', { // State for Landing page
          url: '/landing',
          templateUrl: '/landing.html',
          controller: 'MainCtrl'
        })
        .state('k1', { // State for K1 aka High Frequency words
          url: '/k1',
          templateUrl: '/k1.html',
          controller: 'K1Ctrl',
          resolve: {
            k1Promise: ['k1', function(k1){
              return k1.getAll();
            }]
          }
        })
        .state('k2', { // State for K2 aka Medium Frequency words
          url: '/k2',
          templateUrl: '/k2.html',
          controller: 'K2Ctrl',
          resolve: {
            k2Promise: ['k2', function(k2){
              return k2.getAll();
            }]
          }
        })
        .state('offlist', { // State for Offlist aka Low Frequency words
          url: '/offlist',
          templateUrl: '/offlist.html',
          controller: 'OfflistCtrl',
          resolve: {
            offlistPromise: ['offlist', function(offlist){
              return offlist.getAll();
            }]
          }
        })
        .state('awl', { // State for Academic Word List (AWL)
          url: '/awl',
          templateUrl: '/awl.html',
          controller: 'AWLCtrl',
          resolve: {
            awlPromise: ['awl', function(awl){
              return awl.getAll();
            }]
          }
        })
        .state('enhanced', { // State for Enhanced Text page
          url: '/enhanced',
          templateUrl: '/enhanced.html',
          controller: 'EnhancedCtrl'
        });

      $urlRouterProvider.otherwise('home');
}]);