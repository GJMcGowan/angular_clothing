describe('Clothes Shopping Site', function() {
  beforeEach(function() {
    browser.get("http://localhost:4567");
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual("Clothes Shop");
  });

  it('has a list of products, with their price, category etc.', function() {
    expect(element.all(by.css(".Items")).first().getText()).toContain("Suede Shoes");
  });

  it('has an empty shopping cart when the site loads', function() {
    expect(element(by.css(".cart")).getText()).toContain("Empty");
  });

  it('can add a product to the shopping cart', function() {
    element.all(by.css(".productButton")).first().click();
    expect(element(by.css(".cart")).getText()).toContain("Suede Shoes")
  });

  it('can remove a product from the shopping cart', function() {
    element.all(by.css(".productButton")).first().click();
    element(by.css(".removeProduct")).click();
    expect(element(by.css(".cart")).getText()).toContain("Empty")
  });

  it('can view the total price for products in the shopping cart', function() {
    element.all(by.css(".productButton")).first().click();
    expect(element(by.css(".cart")).getText()).toContain("Total: 42");
  });

  it('can apply a discount to the basket', function() {
    element.all(by.css(".productButton")).first().click();
    expect(element(by.css(".cart")).getText()).toContain("Total: 42");
    element(by.css("#voucher5")).click();
    expect(element(by.css(".cart")).getText()).toContain("Total: 37");
  });

  it('vouchers can only be applied once', function() {
    element.all(by.css(".productButton")).first().click();
    element(by.css("#voucher5")).click();
    expect(element(by.css("#voucher5")).isDisplayed()).not.toBeTruthy();
  });

  it('vouchers are not displayed when basket is empty', function() {
    expect(element(by.css(".vouchers")).isDisplayed()).not.toBeTruthy();
  });

  it('£10 vouchers only usable when spend is over £50', function() {
    element.all(by.css(".productButton")).first().click();
    element(by.css("#voucher10")).click();
    element.all(by.css(".productButton")).first().click();
    element(by.css("#voucher10")).click();
    expect(element(by.css(".cart")).getText()).toContain("Total: 74")
  });
});
