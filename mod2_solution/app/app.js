(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListBuyController', ShoppingListBuyController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListBuyController.$inject = ['ShoppingListService'];
function ShoppingListBuyController(ShoppingListService) {
  var itemBuy = this;

  itemBuy.items = ShoppingListService.getItems();

  itemBuy.removeItem = function (index) {
    console.log(index)
    ShoppingListService.removeItem(index);
  }
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItemsBought();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
                { name: "cookies", quantity: 10 }, 
                { name: "jaffa cakes", quantity: 5 },
                { name: "salt cakes", quantity: 3 },
                { name: "cheesecakes", quantity: 9 },
                { name: "fruitcake", quantity: 15 },
              ];
  var items_bought = [];

  service.addItem = function (item) {
    items_bought.push(item);
  };

  service.removeItem = function (itemIdex) {
    service.addItem(items[itemIdex])
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
  service.getItemsBought = function () {
    return items_bought;
  };
}

})();