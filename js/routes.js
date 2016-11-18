angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('logIn', {
    url: '/page5',
    templateUrl: 'templates/logIn.html',
    controller: 'logInCtrl'
  })

  .state('tabsController.catalogo', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/catalogo.html',
        controller: 'catalogoCtrl'
      }
    }
  })

  .state('tabsController.ajustes', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/ajustes.html',
        controller: 'ajustesCtrl'
      }
    }
  })

  .state('tabsController.evento', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/evento.html',
        controller: 'eventoCtrl'
      }
    }
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('calendario', {
    url: '/page11',
    templateUrl: 'templates/calendario.html',
    controller: 'calendarioCtrl'
  })

  .state('signup', {
    url: '/page10',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page1/page6')

  

});