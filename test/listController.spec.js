describe('ClothesShopController', function() {

  beforeEach(function(){
    module('ClothesShop');
    module('flash');
  });

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ClothesShopController');
    sample = {name: "Suede Shoes, Blue", price: 42.00, quantity: 4, category: "Womens Footwear"};
  }));

  describe('cart', function() {
  });
});