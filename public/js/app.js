let person1 = {
    name: 'li',
    age: 30,
    speak(a) {
        console.log(this.name + ' speaks ' + a);
    },
    spend(a) {
        console.log('I spend ' + a + ' dollar');
        return a * 100;
    }
};
const greetPerson = (person) => {
    console.log(person.age);
};
console.log(person1);
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
let docOne;
let docTwo;
let invoiceOne = new Invoice('mario', 'work on mario website', 250);
let invoiceTwo = new Invoice('marry', 'work on marry website', 300);
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 300);
let docs = [invoiceTwo];
docs.push(docOne);
docs.push(docTwo);
docs.push(invoiceOne);
console.log('docs =>' + docs);
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
//list template instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    //console.log(doc);
    /*
    console.log(type.value)
    console.log(tofrom.value)
    console.log(details.value)
    console.log(amount.valueAsNumber)
    */
});
//console.log(invoiceOne.format());
//console.log(invoiceTwo.format());
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
//console.log(invoices);
invoices.forEach(invoice => {
    //invoice.client = 'hello';
    console.log(invoice.client, invoice.amount, invoice.format());
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne_uid = addUID({ name: 'yoshi', age: 40 });
console.log(docOne_uid);
console.log(docOne_uid.name);
const addUID_extend_object = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const addUID_extend_specific_object = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
//generics with interfaces and enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: 'string data'
};
const docFour = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { data: 'hello world' }
};
const docfive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: ['', '', '']
};
console.log(ResourceType[docfive.resourceType]);
