(function () {
    "use strict";
    
    angular.module('public')
    .component('menuItems', {
      templateUrl: 'src/public/menu-items/menu-item-comp.html',
      bindings: {
        item: '<',
        categoryShortName: '<'
      }
    });
    
    
    
    })();
    