let dyna_age : any;

dyna_age = true;
dyna_age = "hello";

let dyna_mixed: any[] = [];
dyna_mixed.push('helo');
dyna_mixed.push(30);
dyna_mixed.push(true);

console.log(dyna_mixed);

let dyna_ninja: {name:any, age:any};
dyna_ninja = {age:30,name:'bird'};
dyna_ninja.age = "age";
dyna_ninja.name = 'hello world';
console.log(dyna_ninja);
