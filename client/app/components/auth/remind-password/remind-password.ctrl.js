(function(){
  'use strict';

  angular.module('authApp.modules.auth')
    .controller('RemindPasswordCtrl', [ '$timeout','AuthSvc', RemindPasswordCtrl ]);

    function RemindPasswordCtrl($timeout,AuthSvc){
      var self = this;

      self.loading = false;
      self.status = null;

      self.remindPassword = function(){
        if (this.RemindPasswordForm.$invalid) {
          return;
        }

        self.loading = true;
        $timeout(function(){
          AuthSvc.remindPassword(self.login)
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
