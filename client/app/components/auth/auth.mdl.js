(function(){
  'use strict';

  angular.module('authApp.modules.auth', ['ngResource'])
      .config(['$stateProvider',config]);

  function config($stateProvider){

    $stateProvider
      .state('auth',{
        abstract: true,
        url: '/auth',
        templateUrl: 'components/auth/auth.tpl.html'
      })
      .state('auth.signin',{
          url: '/signin',
          templateUrl: 'components/auth/signin/signin-form.tpl.html',
          controller: 'SignInCtrl',
          controllerAs: 'siVm'
      })
      .state('auth.signup',{
          url: '/signup',
          templateUrl: 'components/auth/signup/signup-form.tpl.html',
          controller: 'SignUpCtrl',
          controllerAs: 'suVm'
      })
      .state('auth.remindPassword', {
          url: '/remind-password',
          templateUrl: 'components/auth/remind-password/remind-password-form.tpl.html',
          controller: 'RemindPasswordCtrl',
          controllerAs: 'rpVm'
      })

  }

}());


