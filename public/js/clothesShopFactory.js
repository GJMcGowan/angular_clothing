clothesShop.factory('List', [function() {
  var service = {};
  var cartList = [];
  var vouchers = [];

  service.cartPrice = 0;

  service.cartList = cartList;

  service.productList = {
    "Womens Footwear": [{name: "Suede Shoes, Blue", price: 42.00, quantity: 4, category: "Womens Footwear"},
                    {name: "Almond Toe Court Shoes, Patent Black", price: 99.00,
                    quantity: 5, category: "Womens Footwear"}],
    "Mens Footwear": [{name: "Leather Driver Saddle Loafers, Tan", price: 34.00,
                  quantity: 12, category: "Mens Footwear"},
                  {name: "Flip Flops, Red", price: 19.00, quantity: 6, category: "Mens Footwear"},
                  {name: "Flip Flops, Blue", price: 19.00, quantity: 0, category: "Mens Footwear"}],
    "Womens Casual": [{name: "Gold Button Cardigan, Black", price: 167.00,
                      quantity: 6, category: "Womens Casual"},
                    {name: "Gold Button Cardigan, Black", price: 30.00,
                      quantity: 5, category: "Womens Casual"}],
    "Mens Casual":[{name: "Fine Stripe Short Sleeve Shirt, Grey", price: 49.99,
                      quantity: 9, category: "Mens Casual"},
                     {name: "Fine Stripe Short Sleeve Shirt, Green",
                      price: 39.99, quantity: 3, category: "Mens Casual"}],
    "Womens Formal": [{name: "Bird Print Dress, Black", price: 270.00,
                      quantity: 10, category: "Womens Formal"},
                     {name: "Mid Twist Cut-Out Dress, Pink", price: 540.00,
                      quantity: 5, category: "Womens Formal"}],
    "Mens Formal":[{name: "Sharkskin Waistcoat, Charcoal", price: 75.00,
                      quantity: 6, category: "Mens Formal"},
                     {name: "Lightweight Patch Pocket￼Blazer, Dee", 
                      price: 175.50, quantity: 1, category: "Mens Formal"}]
  };

  service.getCartPrice = function(){
    var result = 0
    for (var i = cartList.length - 1; i >= 0; i--) {
      result += cartList[i].price;
    };
    for (var i = vouchers.length - 1; i >= 0; i--) {
      result -= vouchers[i];
    };
    // Currently the way to deal with JS number oddness
    result = parseFloat(result.toPrecision(12));
    service.cartPrice += result;
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