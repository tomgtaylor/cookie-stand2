'use strict';

let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//let theTotal = 0;

// constructor function passing parameters for (name, min, max, avg).
    // instide we have objects initialized in instances of class "this" (this)
    // "this" is like a bookmark indicating the page. The object "name" is the page in the book.
    // constructor function is the book with objects. 

function CookieShop (name, min, max, avgerage){     // constructor that groups variables like name, min, max, etc..
    this.name = name;
    this.min = min;
    this.max = max;
    this.average = average;
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;
    this.calcCookiesPerHour();

    CookieShop.all.push(this);      //pushes all (everything) into this.
}

CookieShop.all = [];    //stores all(everything) in an array. Data is not organized/arranged yet.
openHours.push(this);

CookieShop.prototype.calcCookiesPerHour = function () {  //prototype inherits features from the constructor
    for (let i = o; i< openHours.length; i++){
        let hourlyCookies = math.ceil(this.calcCustomersPerHour() * this.average );
        this.cookiesPerHour.push(hourlyCookies);
        this.cookieTotal += hourlyCookies;
    }
};

CookieShop.prototype.calcCookiesPerHour = function () {
    return Math.round(Math.random() * (this.max - this.min)) + this.min;
};

new CookieShop('Seattle,' 23, 65, 6.3);
new CookieShop('Tokyo,' 3, 24, 1.2);
new CookieShop('Dubai,' 11, 38, 3.7);
new CookieShop('Paris,' 20, 38, 2.3);
new CookieShop('Lima,' 2, 16, 4.6);


