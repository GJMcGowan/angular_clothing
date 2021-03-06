describe('factory: List', function() {

  var list;

  beforeEach(function(){
    module('ClothesShop');
    module('flash');
  });

  beforeEach(inject(function(List) {
    list = List
    sample = {name: "Suede Shoes, Blue", price: 42.00,
              quantity: 4, category: "Womens Footwear"};
    not_shoes = {name: "Fine Stripe Short Sleeve Shirt, Grey", price: 49.99,
                 quantity: 9, category: "Mens Casual"}
  }));

  describe('cart', function() {

    it('begins with an empty cart', function() {
      expect(list.cartList).toEqual([]);
    });

    it('total price begins at zero', function() {
      expect(list.getCartPrice()).toEqual(0);
    });

    it('can add an item to the cart', function() {
      list.addProduct(sample);
      expect(list.cartList).toEqual([sample]);
    });

    it('can add multiple items to the cart', function() {
      list.addProduct(sample);
      list.addProduct(sample);
      expect(list.cartList).toEqual([sample, sample]);
    })

    it('can remove items from the cart', function() {
      list.addProduct(sample);
      list.removeProduct(sample);
      expect(list.cartList).toEqual([]);
    });

    it('can remove the same items from the cart one by one', function() {
      list.addProduct(sample);
      list.addProduct(sample);
      list.removeProduct(sample);
      expect(list.cartList).toEqual([sample]);
    });

    it('knows the total price of items in the cart', function() {
      list.addProduct(sample);
      list.addProduct(sample);
      expect(list.cartPrice).toEqual(84);
    });

    it('adding an item to the cart lowers the quantity', function() {
      expect(sample.quantity).toEqual(4);
      list.addProduct(sample);
      expect(sample.quantity).toEqual(3);
    });

    it('cannot add out of stock items to the cart', function() {
      for (var i = 10 - 1; i >= 0; i--) {
        list.addProduct(sample);
      };
      expect(list.cartList.length).toEqual(4);
    });
  });

  describe('vouchers', function() {
    it('can apply £5 voucher at any time', function() {
      list.addProduct(sample);
      list.applyVoucher(5);
      expect(list.cartPrice).toEqual(37);      
    });

    it('cannot apply a £10 voucher unless the total price is over £50', function() {
      list.addProduct(sample);
      list.applyVoucher(10);
      expect(list.cartPrice).toEqual(42);
      list.addProduct(sample);
      list.applyVoucher(10);
      expect(list.cartPrice).toEqual(74);
    });

    it('cannot apply £15 voucher unless total price >= £75 and shoes were bought', function() {
      list.addProduct(not_shoes);
      list.applyVoucher(15);
      expect(list.cartPrice).toEqual(49.99);
      list.addProduct(not_shoes);
      list.applyVoucher(15);
      expect(list.cartPrice).toEqual(99.98);
      list.addProduct(sample);
      list.applyVoucher(15);
      expect(list.cartPrice).toEqual(126.98);
    });

    it('removes a £5 voucher when there are no items', function() {
      list.addProduct(sample);
      list.applyVoucher(5);
      list.removeProduct(sample);
      expect(list.cartPrice).toEqual(0);
    });

    it('removes a £10 voucher when its conditions no longer apply', function() {
      list.addProduct(sample);
      list.addProduct(sample);
      list.applyVoucher(10);
      expect(list.cartPrice).toEqual(74);
      list.removeProduct(sample);
      expect(list.cartPrice).toEqual(42);
    });

    it('removes a £15 voucher when its conditions no longer apply', function() {
      list.addProduct(not_shoes);
      list.addProduct(not_shoes);
      list.addProduct(sample);
      list.applyVoucher(15);
      list.removeProduct(sample);
      expect(list.cartPrice).toEqual(99.98);
    });
  });
});