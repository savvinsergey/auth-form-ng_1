(function(){
    'use strict';

    angular.module('authApp.mocks', ['ngMockE2E'])
        .run(['$httpBackend',run]);

    function run($httpBackend){

        $httpBackend
            .when("GET",/\/auth\?/)
            .respond(200, {status:"OK"});

        /* for error example

        $httpBackend
            .when("GET",/\/auth\?/)
            .respond(401, {status:"ERROR"});

        */

        $httpBackend
            .when("POST",/\/auth/)
            .respond(200, {status:"OK"});

        $httpBackend
            .when("DELETE",/\/auth/)
            .respond(200, {status:"OK"});

        $httpBackend.when("GET").passThrough();

    }

}());
