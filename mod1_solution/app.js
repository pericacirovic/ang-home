(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
  $scope.checkif = function () {
  	var for_lunch = $scope.for_lunch;
  	$scope.message_empty = "Please enter data first"
    $scope.message = calc_numb_items(for_lunch);
  };
  var calc_numb_items = function(list_items) {
  	console.log(list_items);
  	var list_array = list_items.split(",");
  	console.log(list_array);
  	var clean_array = [];
  	for (var i=0; i < list_array.length; i++){
  		if (list_array[i].search(/\w/) >= 0){
  			clean_array.push(list_array[i]);
  		}
  	}
  	console.log(clean_array);
  	if (clean_array.length <= 3 && clean_array.length > 0){
  		return "Enjoy!";
  	} else if (clean_array.length > 3){
  		return "Too much!"
  	}
  } 
}

})();
