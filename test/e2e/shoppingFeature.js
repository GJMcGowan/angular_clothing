describe('Clothes Shopping Site', function() {
  beforeEach(function() {
    browser.get("http://localhost:4567");
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual("Clothes Shop");
  });

  it('has a list of products, with their price, category etc.', function() {
    expect(element(by.css(".Items")).getText()).toContain("Suede Shoes");
  });

  it('has an empty shopping cart when the site loads', function() {
    expect(element(by.css(".cart")).getText()).toContain("Empty");
  });

  it('can add a product to the shopping cart', function() {
    element(by.css(".productButton")).click();
    expect(element(by.css(".cart")).getText()).toContain("Suede Shoes")
  });

  it('can remove a product from the shopping cart', function() {
    element(by.css(".productButton")).click();
    element(by.css(".removeProduct")).click();
    expect(element(by.css(".cart")).getText()).toContain("Empty")
  });

  it('can view the total price for products in the shopping cart', function() {
    element(by.css(".productButton")).click();
    expect(element(by.css(".cart")).getText()).toContain("Total: 42");
  });

  it('can apply a discount to the basket', function() {
    element(by.css(".productButton")).click();
    expect(element(by.css(".cart")).getText()).toContain("Total: 42");
    element(by.css("#voucher5")).click();
    expect(element(by.css(".cart")).getText()).toContain("Total: 37");
  });
});

// Needs to be able to deal with multiples of each item without angular just erroring