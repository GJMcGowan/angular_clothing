clothesShop.factory('List', [function() {
  var service = {};
  var cartList = [];
  var vouchers = [];

  service.cartPrice = 0;

  service.cartList = cartList;

  service.getCartPrice = function(){
    var result = 0
    for (var i = cartList.length - 1; i >= 0; i--) {
      result += cartList[i].price;
    };
    for (var i = vouchers.length - 1; i >= 0; i--) {
      result -= vouchers[i];
    };
    result = parseFloat(result.toPrecision(12));
    service.cartPrice = result;
    return result;
  };

  service.addProduct = function(item) {
    if(item.quantity >= 1) {
      cartList.push(item);
      item.quantity -= 1;
    } else {
      // Flash.create('danger', 'That item is out of stock', 'stockError');
    };
    service.getCartPrice();
  };

  service.removeProduct = function(item) {
    // var index = cartList.indexOf(item)
    item.quantity += 1;
    cartList.splice(cartList.indexOf(item), 1);
    voucherRemover();
    service.getCartPrice();
  };

  service.applyVoucher = function(voucher) {
    if(isVoucherPresent(voucher)) {
      return alert("That voucher is already present");
    };
    if(voucher === 5) {
      vouchers.push(voucher)
    } else if (voucher === 10 && checkVoucher10()) {
      vouchers.push(10);
    } else if (voucher === 15 && checkVoucher15()) {
      vouchers.push(15);
    } else {
      // Flash.create('danger', 'Invalid voucher', 'error10');
    };
    service.getCartPrice();
  };

  var isVoucherPresent = function(voucher) {
    for(i = vouchers.length - 1; i >= 0; i--){
      if(vouchers[i] === voucher) {
        return true;
      };
    };
  };

  var voucherRemover = function() {
    for (var i = vouchers.length - 1; i >= 0; i--) {
      if((vouchers[i] === 10) && (!checkVoucher10())) {
        vouchers.splice(i, 1);
        // voucher removed
      } else if((vouchers[i] === 15) && (!checkVoucher15())) {
        vouchers.splice(i, 1);
        // voucher removed
      } else if((vouchers[i] === 5) && (service.getCartPrice() <= 0)){
        vouchers.splice(i, 1);
        // voucher removed
      };
    };
  };

  var checkVoucher10 = function() {
    if(service.getCartPrice() >= 50){
      return true;
    };
  };

  var checkVoucher15 = function() {
    var shoes = false;
    for (var i = cartList.length - 1; i >= 0; i--) {
      if(cartList[i].category.indexOf("Footwear") >= 0) {
        shoes = true;
      };
    };
    if(service.getCartPrice() >= 75 && shoes) {
      return true;
    };
  };

  return service;
}]);