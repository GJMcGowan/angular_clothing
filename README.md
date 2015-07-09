#####A simple, one page clothes shopping website, developed in AngularJS and using a node express server. I used Karma for unit testing and Protractor for feature testing.

I had user stories to guide my features:
* As a User, I can add a product to my shopping cart.
* As a User I can remove a product from my shopping cart.
* As a User I can view the total price for the products in my shopping cart.
* As a User I can apply a voucher to my shopping cart.
* As a User, I can view the total price for the products in my shopping cart with discounts applied
* As a User, I am alerted when I apply an invalid voucher to my shopping cart
* As a User, I am unable to purchase Out of Stock products to the shopping cart

####To use the site:
Clone this repo

Run ```bower install``` and ```npm install``` in the command line

Run ```npm start``` in the command line

Navigate to ```localhost:4567``` in your browser.


####To test:

Run :
* ```npm start ```
* ```webdriver-manager start```
* ```protractor test/e2e/conf.js``` 
in the command line to run the feature tests

Run ```karma start test/karma.conf.js``` in the command line to run the unit tests


####Thoughts on Improvements:

Working on this site really helped me to solidify the basics of working in Angular.

* I didn't test as much as I could have - for example the feature tests are incomplete due to a synchronisation bug, and a unit test is missing for a similar reason.
* There is some odd behaviour that I didn't quite iron out - for example my voucher system is a bit unsophisticated, so vouchers persist after the conditions which allowed you to apply them expire.
* The CSS could be spruced up
