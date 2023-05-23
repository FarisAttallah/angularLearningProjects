(function () {
    'use strict';

    angular.module('Data')
    /**
     * I create two componenets here, one for displaying the list of categories
     * and one for displaying the list of items inside the category
     */
    .component("categoryItem",{
        templateUrl: 'src/templates/categoryItem.component.html',
        bindings: {
            items: '<'
        }
    })

    .component("categoriesList", {
        
        templateUrl: 'src/templates/categoriesList.component.html',
        bindings: {
            items: '<'
        }
    });
})();