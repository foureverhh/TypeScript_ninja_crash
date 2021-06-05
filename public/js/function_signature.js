"use strict";
let func_signature;
//example 1
let greet_type_alias;
greet_type_alias = (name, greet) => {
    console.log(`${name} says ${greet} in greet_type_alias`);
};
greet_type_alias('li', 'hello');
let greet_func;
greet_func = (name, greet) => {
    console.log(`${name} says ${greet} in greet_func`);
};
greet_func('li', 'hello');
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return -1;
    }
};
console.log("func signature clac result is " + calc(1, 2, 'add'));
//example 3
let logDetailsSigature;
logDetailsSigature = (ninja) => {
    console.log(`ninja name is ${ninja.name} and age is ${ninja.age} `);
};
logDetailsSigature({ name: 'master ninja', age: 100 });
