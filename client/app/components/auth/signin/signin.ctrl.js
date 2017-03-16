(function(){
  'use strict';

  angular.module('authApp.modules.auth')
    .controller('SignInCtrl', [ '$timeout','AuthSvc', SignInCtrl ]);

    function SignInCtrl($timeout,AuthSvc){
      var self = this;

      self.loading = false;
      self.status = null;

      self.signIn = function signIn(){
        if (this.SignInForm.$invalid) {
          return;
        }

        self.loading = true;
        $timeout(function(){
          AuthSvc.signIn(self.login,self.password)
            .then(
              function(){
                  self.status = "OK";
              },function(){
                  self.status = "ERROR";
              }
            )
            .finally(function(){
               self.loading = false;
            });
        },2000);
      };
    }

}());
