clothesShop.factory('List', ['Flash', function(Flash) {
  var service = {};
  var cartList = [];
  var vouchers = [];

  service.cartPrice = 0;

  service.cartList = cartList;

  service.productList = {
    "Womens Footwear": [{name: "Suede Shoes, Blue", price: 42.00, quantity: 4, category: "Womens Footwear",
                         image: "images/blue_suede_shoes.jpg"},
                    {name: "Almond Toe Court Shoes, Patent Black", price: 99.00,
                    quantity: 5, category: "Womens Footwear", image: "images/almond_toe_shoes.jpg"}],
    "Mens Footwear": [{name: "Leather Driver Saddle Loafers, Tan", price: 34.00,
                  quantity: 12, category: "Mens Footwear", image: "images/leather_loafers.jpg"},
                  {name: "Flip Flops, Red", price: 19.00, quantity: 6, category: "Mens Footwear",
                   image: "images/red_flip_flops.jpg"},
                  {name: "Flip Flops, Blue", price: 19.00, quantity: 0, category: "Mens Footwear",
                   image: "images/blue_flip_flops.jpg"}],
    "Womens Casual": [{name: "Gold Button Cardigan, Black", price: 167.00,
                      quantity: 6, category: "Womens Casual", image: "images/black_cardigan.jpeg"},
                    {name: "Cotton Shorts, Medium Red", price: 30.00,
                      quantity: 5, category: "Womens Casual", image: "images/red_cotton_shorts.jpg"}],
    "Mens Casual":[{name: "Fine Stripe Short Sleeve Shirt, Grey", price: 49.99,
                      quantity: 9, category: "Mens Casual", image: "images/grey_striped_shirt.jpeg"},
                     {name: "Fine Stripe Short Sleeve Shirt, Green",
                      price: 39.99, quantity: 3, category: "Mens Casual", image: "images/green_striped_shirt.jpeg"}],
    "Womens Formal": [{name: "Bird Print Dress, Black", price: 270.00,
                      quantity: 10, category: "Womens Formal", image: "images/bird_print_dress.jpeg"},
                     {name: "Mid Twist Cut-Out Dress, Pink", price: 540.00,
                      quantity: 5, category: "Womens Formal", image: "images/mid_twist_dress_pink.jpg"}],
    "Mens Formal":[{name: "Sharkskin Waistcoat, Charcoal", price: 75.00,
                      quantity: 6, category: "Mens Formal", image: "images/charcoal_waistcoat.jpeg"},
                     {name: "Lightweight Patch Pocket￼ Blazer, Deer", 
                      price: 175.50, quantity: 1, category: "Mens Formal", image: "images/deer_blazer.jpeg"}]
  };

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
      item.quantity --;
    } else {
      Flash.create('danger', 'Sorry, that item is out of stock');
    };
    service.getCartPrice();
  };

  service.removeProduct = function(item) {
    item.quantity ++;
    cartList.splice(cartList.indexOf(item), 1);
    voucherRemover();
    service.getCartPrice();
  };

  service.applyVoucher = function(voucher) {
    if(isVoucherPresent(voucher)) {
      return Flash.create('danger', "That voucher is already present");
    };
    if(voucher === 5) {
      vouchers.push(voucher)
    } else if (voucher === 10 && checkVoucher10()) {
      vouchers.push(10);
    } else if (voucher === 15 && checkVoucher15()) {
      vouchers.push(15);
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
        Flash.create('danger', 'Your £10 voucher has been removed', 'voucher10')
      } else if((vouchers[i] === 15) && (!checkVoucher15())) {
        vouchers.splice(i, 1);
        Flash.create('danger', 'Your £15 voucher has been removed', 'voucher15')
      } else if((vouchers[i] === 5) && (service.getCartPrice() <= 0)){
        vouchers.splice(i, 1);
        Flash.create('danger', 'Your £5 voucher has been removed', 'voucher5')
      };
    };
  };

  var checkVoucher10 = function() {
    if(service.getCartPrice() >= 50){
      return true;
    } else {
      return Flash.create('danger', 'You need £50 worth of items to use that voucher')
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
    } else {
      var message = "You need £75 worth of items and at least one item of footwear to use that voucher"
      return Flash.create('danger', message)
    };
  };

  return service;
}]);