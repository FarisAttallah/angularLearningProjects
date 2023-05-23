(function () {
    'use strict';

    angular.module('Data')
    .service("MenuDataService", MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var data = this;

        data.getAllCategories = () => {
            var categories = []
            console.log("categories are " + categories);

            return $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            
            }).then(response => {
                console.log("categories 2are " + categories);
                var categoriesPromise = response.data;
                for (let category in categoriesPromise){
                    categories.push(category);
                }
                console.log("categories are " + categories);
                return categories;
            });
        };



        data.getItemsForCategories = (categoryShortName) => {
            var meals = []
            return $http({
                method: "GET",
                url: ( `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${categoryShortName}.json`),
            
            }).then(response => {
                var categoriesPromise = response.data;
                var menuItems = categoriesPromise["menu_items"];
                
                menuItems.forEach(item => meals.push(item.name));
                return meals;
            });
        }
    }
})();