(function () {
    'use strict';

    angular.module('Data')
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