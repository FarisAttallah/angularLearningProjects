(function () {
    'use strict';
    var startingList = [
        {
          name: "Milk",
          quantity: "2"
        },
        {
          name: "Donuts",
          quantity: "200"
        },
        {
          name: "Cookies",
          quantity: "300"
        },
        {
          name: "Chocolate",
          quantity: "5"
        },
        {
            name: "Eggs",
            quantity: "14"
        }
      ];

    angular.module('shoppingListApp', [])
    
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    //Controllers
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService){
        var list1 = this;


        list1.toBuyList = ShoppingListCheckOffService.getItems();
        
        list1.buyItem   = (itemIndex) => {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
        console.log("bought List: " + list1.toBuyList);
        
        list1.isEmpty = ShoppingListCheckOffService.isEmpty();
    }


    //Controllers
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var list2 = this;
        list2.boughtList = ShoppingListCheckOffService.getBoughtItems();

        list2.isEmpty = ShoppingListCheckOffService.isEmpty2();


        console.log("bought List:l " + list2.isEmpty);
    }

    //Service
    function ShoppingListCheckOffService (){
        var service = this;
        var haveModified = false;
        var toBuyList  = [];
        var boughtList = [];
        service.getItems = () => {

            if (haveModified){
                return toBuyList;
            }else {
                toBuyList = startingList;
                return toBuyList;
            }
        };

        service.getBoughtItems = () => {
            return boughtList;
        };

        service.isEmpty = () => {
            return toBuyList.length == 0;
        }

        service.isEmpty2 = () => {
            return boughtList.length == 0;
        }

        service.buyItem = (itemIndex) => {
            haveModified = true;
            var valToRemove = toBuyList[itemIndex];
            var item = {
                name: valToRemove.name,
                quantity : valToRemove.quantity
            };
            boughtList.push(item);
            console.log("bought List: " + boughtList[boughtList.length-1].name);

            toBuyList.splice(itemIndex,1);
        };
        service.getBoughtItems = () => {
            return boughtList;
        };
    }


    // Using a factory did not work, I am unsure why, I think they have different services each?
    // //Factory
    // function ShoppingListFactory(){
    //     var factory =  () => {
    //         return new ShoppingListCheckOffService();
    //     };
    //     return factory
    // }

    })();