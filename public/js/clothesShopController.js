clothesShop.controller('ClothesShopController', ['$http', 'Flash', 'List', function($http, Flash, List) {
  var self = this;

  self.productList = List.productList;
  self.cartPrice = List.getCartPrice();
}]);