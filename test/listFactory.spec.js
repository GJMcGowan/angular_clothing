describe('factory: List', function() {

  var list;

  beforeEach(function(){
    module('ClothesShop');
    module('flash');
  });

  beforeEach(inject(function(List) {
    list = List
    sample = {name: "Suede Shoes, Blue", price: 42.00, quantity: 4, category: "Womens Footwear"};
  }));

  describe('cart', function() {

    it('begins with an empty cart', function() {
      expect(list.cartList).toEqual([]);
    });

    it('total price begins at zero', function() {
      expect(list.cartPrice).toEqual(0);
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

    // it('knows the total price of items in the cart', function() {
    //   list.addProduct(sample);
    //   expect(list.cartPrice).toEqual(42);
    // });

    // it('adding an item to the cart lowers the quantity', function() {
    //   expect(sample.quantity).toEqual(4);
    //   list.addProduct(sample);
    //   expect(sample.quantity).toEqual(3);
    // });

    // it('cannot add out of stock items to the cart', function() {
    //   for (var i = 10 - 1; i >= 0; i--) {
    //     list.addProduct(sample);
    //   };
    //   expect(list.cartList.length).toEqual(4);
    // });
  });

  // describe('vouchers', function() {
  //   it('can apply £5 voucher at any time', function() {
  //     list.addProduct(sample);
  //     list.applyVoucher(5);
  //     expect(list.cartPrice).toEqual(37);      
  //   });

  //   it('cannot apply a £10 voucher unless the total price is over £50', function() {
  //     list.addProduct(sample);
  //     list.applyVoucher(10);
  //     expect(list.cartPrice).toEqual(42);
  //     list.addProduct(sample);
  //     list.applyVoucher(10);
  //     expect(list.cartPrice).toEqual(74);
  //   });
  // });
});