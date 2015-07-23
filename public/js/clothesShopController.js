clothesShop.controller('ClothesShopController', ['$http', '$scope', 'Flash', 'List', function($http, $scope, Flash, List) {
  var self = this;

  self.list = List;

  self.productList = {
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
                     {name: "Lightweight Patch Pocket￼Blazer, Deer", 
                      price: 175.50, quantity: 1, category: "Mens Formal", image: "images/deer_blazer.jpeg"}]
  };

  // Attempt to make these work again, as the view is doing too much work.

  // self.productList = self.list.productList

  // self.cartList = self.list.cartList;

  // self.cartPrice = self.list.cartPrice;

  // self.addProduct = self.list.addProduct;

  // self.removeProduct = self.list.removeProduct;

  // self.applyVoucher = self.list.applyVoucher;

}]);