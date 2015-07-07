describe('Clothes Shopping Site', function() {
  beforeEach(function() {
    browser.get('http://localhost:4567');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clothes Shop');
  });

  it('has a list of products, with their price, category etc.', function() {
    expect(element(by.))
  });
});