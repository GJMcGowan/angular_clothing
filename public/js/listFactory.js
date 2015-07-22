clothesShop.factory('List', [function() {
  var service = {};
  var cartList = [];
  var cartPrice = 0

  service.cartList = cartList;
  service.cartPrice = cartPrice;

  service.addProduct = function(item) {
    if(item.quantity >= 1) {
      cartList.push(item);
      item.quantity -= 1;
      cartPrice += item.price;
    } else {
      // Flash.create('danger', 'That item is out of stock', 'stockError');
    };
  };

  service.removeProduct = function(item) {
    cartPrice -= item.price;
    var index = cartList.indexOf(item)
    item.quantity += 1;
    cartList.splice(index, 1);
  };

  return service;
}]);