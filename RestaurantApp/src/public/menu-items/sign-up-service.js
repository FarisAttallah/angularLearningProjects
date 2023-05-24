(() => {

    angular.module('public')
    .service("SignUpService", SignUpService);

    function SignUpService () {
        var service = this
        service.user = {};
        service.submit = () => {
            service.completed = true;
            console.log("Ctrl.user = " + service.completed);
        }
        service.getUser = () => {
            console.log("Ctrl.user : " + service.user.firstname);
            return service.user;
        }

        


    }
})();