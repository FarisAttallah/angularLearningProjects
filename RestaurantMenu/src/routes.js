(function () {
    'use strict';

    angular.module('Data')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){

        //redirect to home if no other url matches
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url: '/',
            templateUrl: "src/templates/welcome.template.html"
        })

        //the state for displaying the categories
        /**
         * templateURL is what i will display when I get to that state,
         * the html needs to have a <ui-view> tag so that the state can populate it
         * 
         * controller is what the <ui-view> can refer to as a controller when doing stuff
         * 
         * resolve is usually for REST requests, in here we are just getting all categories
         * 
         */
        .state('categories',{
            url: "/categories",
            templateUrl: `src/templates/categoriesList.template.html`,
            controller: 'DataController as data' ,
            resolve: {
                items: ['MenuDataService',(MenuDataService)=>{
                    return MenuDataService.getAllCategories();
                }]
            }

        })


        /**
         * The state for displaying the details of a category in a subview
         * we need to take the itemID from the url, so we have it as such in the url
         * 
         * I tried creating categories here and referencing it later but couldn't so 
         * I just did it in the controller
         * 
         * 
         */
        .state('categories.categoryDetail',{
            url: '/category-detail/{itemId}',
            templateUrl: "src/templates/categoryItems.template.html",
            controller : "CategoryDetailController as categoryDetail"
        });



      

    }
    

})();