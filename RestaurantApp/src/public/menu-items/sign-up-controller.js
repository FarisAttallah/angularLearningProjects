(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        var signup = this
        signup.save = () => {
            SignUpService.user = signup.user;
            console.log("signup.user : " + signup.user.firstname );
        }
    }
    
    })();
    