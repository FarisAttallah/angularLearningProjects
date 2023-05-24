(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })

    .state('public.signup',{
      url:'/menu/signup',
      templateUrl  : 'src/public/menu-items/signup.html',
      controller   : 'SignUpController',
      controllerAs : 'signUpController' 
    })
    .state('public.myinfo', {
      url: '/menu/myinfo',
      templateUrl  : 'src/public/menu-items/myinfo.html',
      controller   : "SignUpController",
      controllerAs : "myInfo",
      resolve      : {
        user       : ['SignUpService', (MenuService) => {
          return MenuService.getUser();
        }]
      }
    })


    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
