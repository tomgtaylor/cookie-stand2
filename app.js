'use strict';

let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let salesTable = document.getElementById('cookieResults');
//-----------------------------------------------
//let theTotal = 0;

// constructor function passing parameters for (name, min, max, avg).
    // instide we have objects initialized in instances of class "this" (this)
    // "this" is like a bookmark indicating the page. The object "name" is the page in the book.
    // constructor function is the book with objects. 
//-----------------------------------------------
function CookieShop (name, min, max, average){     // constructor that groups variables like name, min, max, etc..
    this.name = name;
    this.min = min;
    this.max = max;
    this.average = average;
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;
    this.calcCookiesPerHour();

    CookieShop.all.push(this);      //pushes all (everything) into this.
};
//-----------------------------------------------
CookieShop.all = [];    //stores all(everything) in an array. Data is not organized/arranged yet.
// openHours.push(this);

CookieShop.prototype.calcCookiesPerHour = function () {  //prototype inherits features from the constructor
    for (let i = o; i< openHours.length; i++){
        let hourlyCookies = math.ceil(this.calcCustomersPerHour() * this.average );
        this.cookiesPerHour.push(hourlyCookies);
        this.cookiesTotal += hourlyCookies;
    }
};
//-----------------------------------------------
CookieShop.prototype.calcCookiesPerHour = function () {
    return Math.round(Math.random() * (this.max - this.min)) + this.min;
};
CookieShop.prototype.renderStoreRow = function() {
    let storeRow = document.createElement('tr');
    salesTable.appendChild(storeRow);
    let storeName = document.createElement('td');
    storeName.textContent = this.name;
    storeRow.appendChild(storeName);
    for (let i = 0; i < 15; i++); {
        let tableElement = document.createElement('tr');
        tableElement.textContent = openHours;
        storeRow.appendChild(tableElement);
    }
};
//----------------------------------------------------
let seattle = new CookieShop('Seattle', 23, 65, 6.3);
let tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
let dubai = new CookieShop('Dubai', 11, 38, 3.7);
let paris = new CookieShop('Paris', 20, 38, 2.3);
let lima = new CookieShop('Lima', 2, 16, 4.6);
//-----------------------------------------------
// console.log(CookieShop.Seattle);

//     render what's in the app.js into HTML file, render what is in the console.log
//     target your HTML elements by their id type. For example:
//     Hours element, would get the hours array, and render it
function renderHeaderRow(){
    const tableHeaderRow = document.createElement('tr');
    salesTable.appendChild(tableHeaderRow);    // glue tableHeaderRow to the table
    let emptyCell = document.createElement('td');
    tableHeaderRow.appendChild(emptyCell);
    for (let i = 0; i < 15; i++) {
        let tableHeader = document.createElement('td'); 
        tableHeader.textContent = openHours[i];
        tableHeaderRow.appendChild(tableHeader);
    }
    getSalesTable.appendChild(tableHeaderRow);
};
//-----------------------------------------------
function renderFooterRow(){
    const tableFooterRow = document.createElement('tr');
    salesTable.appendChild(tableFooterRow);    // glue tableHeaderRow to the table
    let emptyCell = document.createElement('td');
    tableFooterRow.appendChild(emptyCell);
    for (let i = 0; i < 15; i++) {
        let tableFooter = document.createElement('td'); 
        tableFooter.textContent = openHours[i];
        tableFooterRow.appendChild(tableFooter);
    }
    getSalesTable.appendChild(tableFooterRow);
};
//-----------------------------------------------
renderHeaderRow();

seattle.renderStoreRow();
tokyo.renderStoreRow();
dubai.renderStoreRow();
paris.renderStoreRow();
lima.renderStoreRow();

renderFooterRow();
//-----------------------------------------------

// add a table row to our table element
// let tableEl = document.getElementById('cookieResults');
// let tableRowEl = document.createElement('tr');
// let nameEl = document.createElement('td');
// let hpEl = document.createElement('td');

// tableEl.appendChild(tableRowEl);
// tableRowEl.appendChild(nameEl);
// tableRowEl.appendChild(hpEl);

// nameEl.textContent = CookieShop.name;
// hpEl.textContent = CookieShop.hp;

