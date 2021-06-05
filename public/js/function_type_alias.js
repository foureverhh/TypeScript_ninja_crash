"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
//const greet_alias = (user: {name: string,uid: string | number}) => {
const greet_alias = (user) => {
    console.log(`${user.name} says hello!`);
};
//const greet_alias_again = (user: {name: string, uid: string | number}) => {
const greet_alias_again = (user) => {
    console.log(`${user.name} says hello`);
};
