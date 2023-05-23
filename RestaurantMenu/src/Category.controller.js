(function () {
    'use strict';
    
    angular.module('Data')
    .controller('CategoryDetailController', CategoryDetailController);
    
    
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