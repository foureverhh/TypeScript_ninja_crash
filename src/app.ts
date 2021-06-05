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

form.addEventListener('submit',(e :Event)=>{
    e.preventDefault();
    console.log(type.value)
    console.log(tofrom.value)
    console.log(details.value)
    console.log(amount.valueAsNumber)
});


//classes
class Invoice {
    readonly client :string;
    private details :string;
    amount :number;

    constructor(c:string, d:string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invoiceOne = new Invoice('mario','work on mario website',250);
const invoiceTwo = new Invoice('marry','work on marry website',300);

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


