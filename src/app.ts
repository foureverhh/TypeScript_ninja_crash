
//interface
interface IsPerson {
    name: string,
    age: number,
    speak(a: string):void;
    spend(a: number): number;
}
let person1 :IsPerson = {
   name:'li',
   age:30,
   speak(a:string):void {
        console.log(this.name + ' speaks ' + a)
   },
   spend(a:number):number {
       console.log('I spend ' + a + ' dollar')
       return a * 100;
   }
}

const greetPerson = (person: IsPerson) => {
    console.log(person.age);
}

console.log(person1)

import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;


let invoiceOne = new Invoice('mario','work on mario website',250);
let invoiceTwo = new Invoice('marry','work on marry website',300);


docOne = new Invoice('yoshi','web work', 250);
docTwo = new Payment('mario','plumbing work',300);

let docs: HasFormatter[] = [invoiceTwo];
docs.push(docOne);
docs.push(docTwo);
docs.push(invoiceOne)
console.log('docs =>' + docs)
//! means you are certain element exits
const anchor = document.querySelector('a')!;
//console.log(anchor.href);
//cast an element found by class to a html type
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('.item-list')! as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e :Event)=>{
    e.preventDefault();
    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
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

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
//console.log(invoices);


invoices.forEach(invoice => {
    //invoice.client = 'hello';

    console.log(invoice.client,invoice.amount,invoice.format());
});

//Generics

const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj,uid};
}

let docOne_uid = addUID({name: 'yoshi', age: 40});
console.log(docOne_uid);
console.log(docOne_uid.name);


const addUID_extend_object = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj,uid};
}

const addUID_extend_specific_object = <T extends {name:string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj,uid};
}

//generics with interfaces and enum
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR; PERSON}
interface Resouce <T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docThree: Resouce<string> = {
    uid:1 ,
    resourceType: ResourceType.AUTHOR,
    data: 'string data'
}

const docFour: Resouce<object> = {
    uid:1 ,
    resourceType: ResourceType.PERSON,
    data: {data: 'hello world'}
}

const docfive: Resouce<string []> = {
    uid:1 ,
    resourceType: ResourceType.BOOK,
    data: ['','','']
}

console.log(ResourceType[docfive.resourceType]);

