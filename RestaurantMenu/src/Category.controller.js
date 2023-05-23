(function () {
    'use strict';
    
    angular.module('Data')
    .controller('CategoryDetailController', CategoryDetailController);
    
    /**
     * This is where I am looking up the date for a specific category
     * I pass in items which we got from the previous state as an injected property
     * then use it to get the category clicked, and find the menu for that category
     * 
     */
    CategoryDetailController.$inject = ['$stateParams', 'items','MenuDataService'];
    function CategoryDetailController($stateParams, items, MenuDataService) {
      var categoryDetail = this;
      var item = items[$stateParams.itemId];

      MenuDataService.getItemsForCategories(item).then(response => {
        categoryDetail.menus = response;
        console.log("categoryDetail.menus: " + categoryDetail.menus);
      })

    }
    
    })();