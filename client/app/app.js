(function(){
    'use strict';

    angular.module('authApp', [
        'ui.router',
        
        'authApp.config',
        'authApp.mocks',
        'authApp.modules.auth'
    ])
    .config(['$urlRouterProvider', config]);

    function config($urlRouterProvider){
        $urlRouterProvider.otherwise('/auth/signin');
    }

}());

