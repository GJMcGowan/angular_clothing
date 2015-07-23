clothesShop.controller('ClothesShopController', ['$http', '$scope', 'Flash', 'List', function($http, $scope, Flash, List) {
  var self = this;

  self.list = List;

  // Attempt to make these work again, as the view is doing way too much work.

  // self.productList = self.list.productList

  // self.cartList = self.list.cartList;

  // self.cartPrice = self.list.cartPrice;

  // self.addProduct = self.list.addProduct;

  // self.removeProduct = self.list.removeProduct;

  // self.applyVoucher = self.list.applyVoucher;

}]);