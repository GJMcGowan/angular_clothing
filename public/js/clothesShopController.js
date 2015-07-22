clothesShop.controller('ClothesShopController', ['$http', 'Flash', 'List', function($http, Flash, List) {
  var self = this;

  self.productList = List.productList;

  self.cartList = List.cartList;

  self.cartPrice = List.cartPrice;

  self.addProduct = List.addProduct;

  self.removeProduct = List.removeProduct;

  self.applyVoucher = List.applyVoucher;

// Graveyard

  // self.cartList = []
  // self.cartPrice = 0
  // self.voucher5 = true
  // self.voucher10 = true
  // self.voucher15 = true

  // self.productList = {
  //   "Womens Footwear": [{name: "Suede Shoes, Blue", price: 42.00, quantity: 4, category: "Womens Footwear"},
  //                   {name: "Almond Toe Court Shoes, Patent Black", price: 99.00,
  //                   quantity: 5, category: "Womens Footwear"}],
  //   "Mens Footwear": [{name: "Leather Driver Saddle Loafers, Tan", price: 34.00,
  //                 quantity: 12, category: "Mens Footwear"},
  //                 {name: "Flip Flops, Red", price: 19.00, quantity: 6, category: "Mens Footwear"},
  //                 {name: "Flip Flops, Blue", price: 19.00, quantity: 0, category: "Mens Footwear"}],
  //   "Womens Casual": [{name: "Gold Button Cardigan, Black", price: 167.00,
  //                     quantity: 6, category: "Womens Casual"},
  //                   {name: "Gold Button Cardigan, Black", price: 30.00,
  //                     quantity: 5, category: "Womens Casual"}],
  //   "Mens Casual":[{name: "Fine Stripe Short Sleeve Shirt, Grey", price: 49.99,
  //                     quantity: 9, category: "Mens Casual"},
  //                    {name: "Fine Stripe Short Sleeve Shirt, Green",
  //                     price: 39.99, quantity: 3, category: "Mens Casual"}],
  //   "Womens Formal": [{name: "Bird Print Dress, Black", price: 270.00,
  //                     quantity: 10, category: "Womens Formal"},
  //                    {name: "Mid Twist Cut-Out Dress, Pink", price: 540.00,
  //                     quantity: 5, category: "Womens Formal"}],
  //   "Mens Formal":[{name: "Sharkskin Waistcoat, Charcoal", price: 75.00,
  //                     quantity: 6, category: "Mens Formal"},
  //                    {name: "Lightweight Patch Pocket￼Blazer, Dee", 
  //                     price: 175.50, quantity: 1, category: "Mens Formal"}]
  // };

  // self.addProduct = function(item) {
  //   if(item.quantity >= 1) {
  //     self.cartList.push(item);
  //     item.quantity -= 1;
  //     self.cartPrice += item.price;
  //   } else {
  //     Flash.create('danger', 'That item is out of stock', 'stockError');
  //   };
  // };

  // self.removeProduct = function(item) {
  //   self.cartPrice -= item.price;
  //   var index = self.cartList.indexOf(item)
  //   item.quantity += 1;
  //   self.cartList.splice(index, 1);
  // };

  // self.applyVoucher = function(voucher) {
  //   if(voucher === 5) {
  //     self.cartPrice -= voucher;
  //     self.voucher5 = false;
  //   };
  //   if(voucher === 10) {
  //     self.applyVoucher10();
  //   };
  //   if(voucher === 15) {
  //     self.applyVoucher15();
  //   };
  // };

  // self.applyVoucher10 = function() {
  //   if(self.cartPrice >= 50 && self.voucher10 === true) {
  //     self.cartPrice -= 10;
  //     self.voucher10 = false;
  //   } else {
  //     var show = 'You need at least £50 of items to use that voucher'
  //     Flash.create('danger', show, 'error10');
  //   };
  // };

  // self.applyVoucher15 = function() {
  //   var shoes = false
  //   for (var i = self.cartList.length - 1; i >= 0; i--) {
  //     if(self.cartList[i].category.includes("Footwear")) {
  //       shoes = true
  //     };
  //   };
  //   if(self.cartPrice >= 75 && self.voucher15 === true && shoes) {
  //     self.cartPrice -= 15;
  //     self.voucher15 = false;   
  //   } else {
  //     var show = 'You need at least £75 of items and an item of footwear to use that voucher'
  //     Flash.create('danger', show, 'error15');
  //   };
  // };

}]);