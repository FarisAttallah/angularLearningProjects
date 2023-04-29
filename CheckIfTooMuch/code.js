(() =>{
    'use strict';
    angular.module('checkFoodApp',[])
    .controller('angController', runController);
    
    runController.$inject = ['$scope'];

    function runController ($scope){
        $scope.name = "";
        let output = "";
        $scope.result = "";
        $scope.color = ""
        $scope.didIEatTooMuch = () => {
            output = parseInput($scope.name);
            if(output.length == 0) {
                $scope.result = "Please enter data first";
                $scope.color = "red";
            }else if (output.length <= 3 ){
                $scope.result = "Enjoy!";
                $scope.color = "green";
            }else{
                $scope.color = "green";
                $scope.result = "Too Much";
            } 
            console.log(output);


        }

    }


    function parseInput(inputString){
        return inputString.split(",").filter((word => word.trim().length > 0));
    }

}
)()