type objtwoStringVoid = (a:string, b:string) => void;

let func_signature : Function;

//example 1
let greet_type_alias:objtwoStringVoid;
greet_type_alias = (name: string,greet: string) => {
    console.log(`${name} says ${greet} in greet_type_alias`);
}
greet_type_alias('li','hello');

let greet_func:(a:string, b:string) => void;
greet_func = (name: string,greet: string) => {
    console.log(`${name} says ${greet} in greet_func`);
}

greet_func('li','hello')
//example 2
let calc: (a:number, b:number, c:string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    }else{
        return -1;
    }      
}

console.log("func signature clac result is " + calc(1,2,'add'))

//example 3
let logDetailsSigature: (obj: {name: string, age: number}) => void;

logDetailsSigature = (ninja: {name: string, age:number}) => {
    console.log(`ninja name is ${ninja.name} and age is ${ninja.age} `);
}

logDetailsSigature({name:'master ninja', age:100});

