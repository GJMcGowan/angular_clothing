clothesShop.factory('List', [function() {
  var service = {};
  var cartList = [];
  var vouchers = [];

  service.cartList = cartList;

  service.getCartPrice = function(){
    var result = 0
    for (var i = cartList.length - 1; i >= 0; i--) {
      result += cartList[i].price;
    };
    for (var i = vouchers.length - 1; i >= 0; i--) {
      result -= vouchers;
    };
    // Currently the way to deal with JS number oddness
    result = parseFloat(result.toPrecision(12));
    return result;
  };

  service.addProduct = function(item) {
    if(item.quantity >= 1) {
      cartList.push(item);
      item.quantity -= 1;
    } else {
      // Flash.create('danger', 'That item is out of stock', 'stockError');
    };
  };

  service.removeProduct = function(item) {
    var index = cartList.indexOf(item)
    item.quantity += 1;
    cartList.splice(index, 1);
  };

  service.applyVoucher = function(voucher) {
    var used = false;
    for(i = vouchers.length - 1; i >= 0; i--){
      if(vouchers[i] === voucher) {
        used = true;
      };
    };
    if(voucher === 5) {
      vouchers.push(voucher)
    } else if (voucher === 10) {
      service.applyVoucher10();
    } else if (voucher === 15) {
      service.applyVoucher15();
    } else {
      // Flash.create('danger', 'Invalid voucher', 'error10');
    };
  };

  service.applyVoucher10 = function() {
    if(service.getCartPrice() >= 50) {
      vouchers.push(10);
    } else {
      // var show = 'You need at least £50 of items to use that voucher'
      // Flash.create('danger', show, 'error10');
    };
  };

  service.applyVoucher15 = function() {
    var shoes = false;
    for (var i = cartList.length - 1; i >= 0; i--) {
      if(cartList[i].category.indexOf("Footwear") >= 0) {
        shoes = true;
      };
    };
    if(service.getCartPrice() >= 75 && shoes) {
      vouchers.push(15);
    } else {
      // var show = 'You need at least £75 of items and an item of footwear to use that voucher'
      // Flash.create('danger', show, 'error15');
    };
  };

  return service;
}]);