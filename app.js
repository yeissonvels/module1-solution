(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.message = "";
    $scope.dishes = "";
    $scope.customClass = "";
    $scope.customForm = "";
    
    $scope.checkDishes = function() {
        if ($scope.dishes === "") {
            $scope.customClass = "red";
            $scope.customForm = "wrong-form";
            $scope.message = "Please enter data first";
        } else {
            // Check if there is an empty item
            $scope.customClass = "green";
            $scope.customForm = "right-form";
            var dishes = $scope.checkEmptyItems($scope.dishes.split(','));
            alert(dishes);
            var totalDishes = dishes.length;
            alert(totalDishes);
            if (totalDishes > 0 && totalDishes <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
        
    }

    $scope.checkEmptyItems = function(dishes) {
        var filledItems = [];
        for(var i = 0; i < dishes.length; i++) {
            if (dishes[i].trim() != "") {
                filledItems.push(dishes[i].trim());
            }
        }
        return filledItems;
    }
}

})();