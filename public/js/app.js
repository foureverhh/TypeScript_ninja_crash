"use strict";
//! means you are certain element exits
const anchor = document.querySelector('a');
//console.log(anchor.href);
//cast an element found by class to a html type
const form = document.querySelector('.new-item-form');
//console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
//classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('mario', 'work on mario website', 250);
const invoiceTwo = new Invoice('marry', 'work on marry website', 300);
console.log(invoiceOne.format());
console.log(invoiceTwo.format());
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
