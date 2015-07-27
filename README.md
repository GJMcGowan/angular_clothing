[![Build Status](https://travis-ci.org/GJMcGowan/angular_clothing.svg?branch=master)](https://travis-ci.org/GJMcGowan/angular_clothing.svg?branch=master)

#####A simple, one page clothes shopping website, developed in AngularJS and using a node express server. I used Karma for unit testing and Protractor for feature testing. Travis CI provides continious integration testing. I used Bootstrap for much of the styling.

![Screenshot](/public/images/Screenshot.png)

I had user stories to guide my features:
* As a User, I can add a product to my shopping cart.
* As a User I can remove a product from my shopping cart.
* As a User I can view the total price for the products in my shopping cart.
* As a User I can apply a voucher to my shopping cart.
* As a User, I can view the total price for the products in my shopping cart with discounts applied
* As a User, I am alerted when I apply an invalid voucher to my shopping cart
* As a User, I am unable to purchase Out of Stock products to the shopping cart

####Approach
When I first saw the specification for this task, I automatically thought of making it a one-page app, using Javascript. I decided to use the Angular framework as I had enough experience with it to get me started, but not enough that I couldn't learn something by doing it.

Initially, I made a version which satisfied most of the user stories (most of the time) but had several bugs (e.g. around vouchers) and didn't follow MVC principles properly (with all the logic being in the controller). It also had very little styling.

This version is significantly improved - the voucher bugs were removed, the app logic was moved to a factory and I styled it more using bootstrap. While doing this I had a few problems with making the data bindings work properly now that the logic was in a factory ([this article really helped me](https://stsc3000.github.io/blog/2013/10/26/a-tale-of-frankenstein-and-binding-to-service-values-in-angular-dot-js/)) and with the logic for add/removing vouchers (I completely overhauled the way that vouchers were being sorted to make this easier).

####To use the site:
* Clone this repo
* Run ```bower install``` and ```npm install``` in the command line
* Run ```npm start``` in the command line
* Navigate to ```localhost:4567``` in your browser.

####To test:

For unit tests, run ```npm test``` in the command line

For feature tests, run the following in the command line:
* ```npm start ```
* ```webdriver-manager start```
* ```protractor test/e2e/conf.js``` 

####Improvements

I tried to make this project as good as possible while keeping it simple and not adding extra features. However, if I did want to improve it by adding more features, I have several ideas on how to do so:
* Using a datbase: I currently just have the data structure (containing clothes names etc.) in the factory as an object. I recognise this isn't scalable, or usually a good idea! If I were to expand this app beyond a quick demo, I would add a database to sort this - likely MongoDB.
* Users/Persistence: Currently a page refresh removes items from the cart - in the future I would make there be logged in users with persistent carts.
* Checkout: Users can add items to carts but not buy anything, so I would add a checkout - likely integrating Stripe or some other service.
