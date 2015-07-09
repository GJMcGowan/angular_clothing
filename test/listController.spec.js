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
    it('begins with an empty cart', function() {
      expect(ctrl.cartList).toEqual([]);
    });

    it('total price begins at zero', function() {
      expect(ctrl.cartPrice).toEqual(0);
    });

    it('can add an item to the cart', function() {
      ctrl.addProduct(sample);
      expect(ctrl.cartList).toEqual([sample]);
    });

    it('can add multiple items to the cart', function() {
      ctrl.addProduct(sample);
      ctrl.addProduct(sample);
      expect(ctrl.cartList).toEqual([sample, sample]);
    })

    it('can remove items from the cart', function() {
      ctrl.addProduct(sample);
      ctrl.removeProduct(sample);
      expect(ctrl.cartList).toEqual([]);
    });

    it('knows the total price of items in the cart', function() {
      ctrl.addProduct(sample);
      expect(ctrl.cartPrice).toEqual(42);
    });

    it('adding an item to the cart lowers the quantity', function() {
      expect(sample.quantity).toEqual(4);
      ctrl.addProduct(sample);
      expect(sample.quantity).toEqual(3);
    });

    it('cannot add out of stock items to the cart', function() {
      for (var i = 10 - 1; i >= 0; i--) {
        ctrl.addProduct(sample);
      };
      expect(ctrl.cartList.length).toEqual(4);
    });
  });

  describe('vouchers', function() {
    it('can apply £5 voucher at any time', function() {
      ctrl.addProduct(sample);
      ctrl.applyVoucher(5);
      expect(ctrl.cartPrice).toEqual(37);      
    });

    it('cannot apply a £10 voucher unless the total price is over £50', function() {
      ctrl.addProduct(sample);
      ctrl.applyVoucher(10);
      expect(ctrl.cartPrice).toEqual(42);
      ctrl.addProduct(sample);
      ctrl.applyVoucher(10);
      expect(ctrl.cartPrice).toEqual(74);
    });
  });
});