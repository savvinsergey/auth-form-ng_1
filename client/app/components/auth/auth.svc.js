(function(){
  'use strict';

  angular.module('authApp.modules.auth')
      .factory('AuthSvc', [ '$resource', AuthSvc ]);

  function AuthSvc($resource){

    var auth = $resource('/auth',{},
      {
        signIn: {
          method: "GET",
          params: {
            login:  "",
            password: ""
          }
        },
        signUp: {
          method: "POST",
          params: {
            username: "",
            phone: "",
            login: "",
            password: ""
          }
        },
        remindPassword: {
          method: "DELETE",
          param: {
            login: ""
          }
        }
      });

    return {

      signIn: function singIn(login,password){
        return auth.signIn({
          login    : login,
          password : password
        }).$promise;
      },

      signUp: function singUn(username,phone,login,password){
        return auth.signUp({
          username : username,
          phone    : phone,
          login    : login,
          password : password
        }).$promise;
      },

      remindPassword: function remindPassword(login){
        return auth.remindPassword({login:login}).$promise;
      }

    };

  }

}());
