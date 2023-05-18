(()=>{
'use strict';

angular.module('MenuNarrowApp',[])
.controller('MenuNarrowController',MenuNarrowController)
.service('MenuNarrowService',MenuNarrowService)
.directive("foundItems", FoundItems)
.constant("ApiBasePath", "https://coursera-jhu-default-rtdb.firebaseio.com")

function FoundItems() {
    var ddo = {
        restrict: "E",
        templateUrl: 'foundItems.html',
        scope: {
            found: '<',
            onRemove: '&'
          },
        controller       : MenuNarrowDirectiveController,
        controllerAs     : 'menu',
        bindToController : true,
        link: MenuNarrowLink 
    };

    return ddo;
}


function MenuNarrowLink (scope,element,attrs,controller){
    scope.$watch('menu.isEmpty()',(newValue,oldValuse)=> {
        var warningElem = element.find("div.error");
        if (newValue){
            warningElem.slideDown(900);
        }else {
            warningElem.slideUp(900);
        }
    })
}

function MenuNarrowDirectiveController (){
    var menu = this;
    menu.isEmpty = () => {return menu.found.length == 0}

}
var tempItems = [{
    id: "A",
    short_name: "A1",
    name : "Won Ton Soup",
    description:"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions	"}
    ,
    {
        id: "A",
        short_name: "A1",
        name : "Won Soup",
        description:"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions	"  
    }
    ,{
        id: "A",
        short_name: "A1",
        name : "Won Ton ",
        description:"chicken broth with egg drop	"  
    },
    {
        id: "A",
        short_name: "A1",
        name : "Ton Soup",
        description:"clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas)"  
    }  
]
MenuNarrowController.$inject = ['MenuNarrowService'];
function MenuNarrowController (MenuNarrowService){
    var menu = this;
    menu.searchWord = "";
    menu.found = []
    menu.narrowItDownForMe = () =>{
        
        var promise = MenuNarrowService.getMenuItems(menu.searchWord);
        promise.then (response => {
            menu.found =response;
        })
        console.log(menu.found)
    }

    menu.removeItem = (index) => {
        menu.found.splice(index,1);
    }
    




}


MenuNarrowService.$inject = ['$http','ApiBasePath'];
function MenuNarrowService($http,ApiBasePath){
    var service = this;


    //not using it because I can't access the api.
    service.getMenuItems = function (searchWord) {
        return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
        }).then(response=> {
            var found = [];
            var menuItemsFull = response.data;
            found = service.searchForWord(searchWord,menuItemsFull)
            return found
        }) ;

    }

    service.searchForWord = (searchWord,response) => {

        // menuItems = service.getMenuItems().data;
            var found = [];
            if (searchWord != ""){
                for (let category in response){
                    var currentCategory = response[category]["menu_items"];
                    currentCategory.forEach((element => {
                        if (element["description"].toLowerCase().indexOf(searchWord.toLowerCase()) !== -1){
                            found.push(element);
    
                        }
        
                    }))
                }
                
            }

            return found;
    }




}


})()