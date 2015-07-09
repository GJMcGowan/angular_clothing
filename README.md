A simple clothing website, developed in AngularJS and using a node express server. I used Karma for unit testing and protractor for feature testing.

I used user stories to guide my features:

```As a User, I can add a product to my shopping cart.
As a User I can remove a product from my shopping cart.
As a User I can view the total price for the products in my shopping cart.
As a User I can apply a voucher to my shopping cart.
As a User, I can view the total price for the products in my shopping cart with discounts applied
As a User, I am alerted when I apply an invalid voucher to my shopping cart
As a User, I am unable to purchase Out of Stock products to the shopping cart```

To use:
Clone this repo
Run ```bower install``` and ```npm install``` in the command line
Run '''npm start''' in the command line
Navigate to ```localhost:4567``` in your browser.

To test:
Run ```protractor test/e2e/conf.js``` in the command line to run the feature tests
Run ```karma start test/karma.conf.js``` in the command line to run the unit tests

