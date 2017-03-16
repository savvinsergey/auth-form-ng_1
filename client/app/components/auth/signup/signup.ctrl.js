(function(){
  'use strict';

  angular.module('authApp.modules.auth')
    .controller('SignUpCtrl', [ '$timeout','AuthSvc', SignUpCtrl ]);

    function SignUpCtrl($timeout, AuthSvc){
      var self = this;

      self.loading = false;
      self.status = null;

      self.signUp = function signUp(){
        if (this.SignUpForm.$invalid) {
          return;
        }

        self.loading = true;
        $timeout(function(){
          AuthSvc.signUp(self.username, self.phone, self.login, self.password)
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
