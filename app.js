'use strict';

let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
let salesTable = document.getElementById('cookieResults');
//-----------------------------------------------
// constructor function passing parameters for ( name, min, max, avg ).
    // instide we have objects initialized in instances of class "this" ( this )
    // "this" is like a bookmark indicating the page. The object "name" is the page in the book.
    // constructor function is the book with objects. 
//-----------------------------------------------
function CookieStore (name, min, max, average){     // constructor that groups variables like name, min, max, etc..
    this.name = name;
    this.min = min;
    this.max = max;
    this.average = average;
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;
    this.calcCookiesPerHour();

    CookieStore.all.push(this);      //pushes all (everything) into this.
}
//-----------------------------------------------
CookieStore.all = [];    //stores all(everything) in an array. Data is not organized/arranged yet.
// openHours.push(this);

CookieStore.prototype.calcCookiesPerHour = function() {  //prototype inherits features from the constructor
    for (let i = 0; i < openHours.length - 1; i++) {
        let hourlyCookies = Math.ceil(this.randomNumGen() * this.average);
        this.cookiesPerHour.push(hourlyCookies);
        this.cookiesTotal += hourlyCookies;
    }
};
//-----------------------------------------------
CookieStore.prototype.randomNumGen = function() {
    return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
};
//-----------------------------------------------
CookieStore.prototype.renderStoreRow = function() {
    let storeRow = document.createElement('tr');
    salesTable.appendChild(storeRow);
    let storeName = document.createElement('td');
    storeName.textContent = this.name;
    storeRow.appendChild(storeName);

    for (let i = 0; i < openHours - 1; i++); {
        let tableRowElement = document.createElement('tr');
        tableRowElement.textContent = this.cookiesPerHour;
        storeRow.appendChild(tableRowElement);
    }
};
//----------------------------------------------------

let seattle = new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

console.log(CookieStore.all);
console.log(CookieStore.all[0].cookiesPerHour[1]);

//-----------------------------------------------
// console.log(CookieStore.Seattle);

//     render what's in the app.js into HTML file, render what is in the console.log. (worked on with Kassie and Trevor)
//     target your HTML elements by their id type. For example:
//     Hours element, would get the hours array, and render it
function renderHeaderRow(){
    let tableHeaderRow = document.createElement('tr');
    let theTotal = document.createElement('td');
    salesTable.appendChild(theTotal);    // glue "theTotal" to the table

        for (let i = 0; i < openHours.length; i++) {

            let tableHeader = document.createElement('td'); 
            tableHeader.textContent = openHours[i];
            tableHeaderRow.appendChild(tableHeader);
        }
        salesTable.appendChild(tableHeaderRow);
};
//-----------------------------------------------
function renderFooterRow(){
    const tableFooterRow = document.createElement('tr');
    salesTable.appendChild(tableFooterRow);    // glue tableHeaderRow to the table
    let emptyCell = document.createElement('td');
    tableFooterRow.appendChild(emptyCell);
        // This should give us each hour for each location, and addes all the numbers.
    for (let i = 0; i < openHours.length; i++) {
        let sum = 0;
        for (let x = 0; x < CookieStore.all.length; X++);{
        sum += CookieStore.all[x].cookiesPerHour[i];
        }
        let tableFooter = document.createElement('td'); 
        tableFooter.textContent = sum;
        tableFooterRow.appendChild(tableFooter);
    }
    salesTable.appendChild(tableFooterRow);
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

// nameEl.textContent = CookieStore.name;
// hpEl.textContent = CookieStore.hp;

