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
    element(by.css(".btn")).click();
    expect(element(by.css(".cart")).getText()).toContain("Suede Shoes")
  });
});