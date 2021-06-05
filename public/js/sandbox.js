"use strict";
let character = 'hello';
let age = 30;
let isBlackBelt = false;
character = 'jhell';
const circ = (diameter) => {
    return diameter * Math.PI;
};
//console.log(circ("hello"));
console.log(circ(100));
//console.log(character);
//const inputs = document.querySelectorAll('input');
//inputs.forEach(input => {
//  console.log(input);
//});
//arrays
let names = ['tom', 'jerry', 'cat'];
names.push('toad');
let numbers = [10, 20, 30, 40];
numbers.push(34);
let mixed = ['hello', 24, 100, false];
mixed.push('avc');
mixed.push(0);
mixed[0] = 'hello';
//objects
let ninja = {
    name: 'li',
    belt: 'white',
    age: 30,
    skills: [],
};
ninja.name = 'haha';
console.log(ninja);
