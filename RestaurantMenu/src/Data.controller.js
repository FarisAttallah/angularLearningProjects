(function () {
    'use strict';

    angular.module('Data')
    .controller('DataController',DataController);

    DataController.$inject = ['MenuDataService','items'];
    function DataController(MenuDataService, items){
        var data = this;
        data.items = items;
    }
})();