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


        .state('categories.categoryDetail',{
            url: '/category-detail/{itemId}',
            templateUrl: "src/templates/categoryItems.template.html",
            controller : "CategoryDetailController as categoryDetail"
        })


        
        .state('categories',{
            url: "/categories",
            templateUrl: `src/templates/categoriesList.template.html`,
            controller: 'DataController as data' ,
            resolve: {
                items: ['MenuDataService',(MenuDataService)=>{
                    return MenuDataService.getAllCategories();
                }]
            }

        });

    }
    

})();