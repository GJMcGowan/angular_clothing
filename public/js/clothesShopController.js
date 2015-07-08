clothesShop.controller('ClothesShopController', ['Flash', function(Flash) {

  var self = this;

  self.cartList = []
  self.cartPrice = 0
  self.voucher5 = true
  self.voucher10 = true
  self.voucher15 = true
  self.errorList = []

  self.productList = {
    "womensShoes": [{name: "Suede Shoes, Blue", price: 42.00, quantity: 4},
                    {name: "Almond Toe Court Shoes, Patent Black", price: 99.00,
                    quantity: 5}],
    "mensShoes": [{name: "Leather Driver Saddle Loafers, Tan", price: 34.00,
                  quantity: 12},
                  {name: "Flip Flops, Red", price: 19.00, quantity: 6},
                  {name: "Flip Flops, Blue", price: 19.00, quantity: 0}],
    "womensCasual": [{name: "Gold Button Cardigan, Black", price: 167.00,
                      quantity: 6},
                    {name: "Gold Button Cardigan, Black", price: 30.00,
                      quantity: 5}],
    "mensCasual":[{name: "Fine Stripe Short Sleeve Shirt, Grey", price: 49.99,
                      quantity: 9},
                     {name: "Fine Stripe Short Sleeve Shirt, Green",
                      price: 39.99, quantity: 3}],
    "womensFormal": [{name: "Bird Print Dress, Black", price: 270.00,
                      quantity: 10},
                     {name: "Mid Twist Cut-Out Dress, Pink", price: 540.00,
                      quantity: 5}],
    "mensFormal":[{name: "Sharkskin Waistcoat, Charcoal", price: 75.00,
                      quantity: 6},
                     {name: "Lightweight Patch Pocket￼Blazer, Dee", 
                      price: 175.50, quantity: 1}]
  };

  self.addProduct = function(item) {
    self.cartList.push(item);
    self.cartPrice += item.price;
  };

  self.removeProduct = function(item) {
    self.cartPrice -= item.price;
    var index = self.cartList.indexOf(item)
    self.cartList.splice(index, 1);
  };

  self.applyVoucher = function(voucher) {
    if(voucher === 5) {
      self.cartPrice -= voucher;
      self.voucher5 = false;
    };
    if(voucher === 10) {
      if(self.voucher10 === true) {
        if(self.cartPrice >= 50) {
          self.cartPrice -= voucher;
          self.voucher10 = false;
        } else {
          Flash.create('danger', 'You need at least £50 of items to use that voucher', 'error10');
        };
      };
    };
    if(voucher === 15) {
      if(self.voucher15 === true) {
        if(self.cartPrice >= 75) {
          self.cartPrice -= voucher;
          self.voucher15 = false;   
        } else {
          Flash.create('danger', 'You need at least £75 of items to use that voucher', 'error15');
        };;
      };
    };
  };

  self.removeVouchers = function() {
    
  };
}]);