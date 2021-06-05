//explicit types
let c: string;
let a: number;
let isLogin: boolean;

c = 'hello';
a = 31;
isLogin = false;

//arrays
let ninjas: string[];
ninjas = ['23','10'];

//union types
let mix: (string | number)[] = [];
mix.push('hello');
mix.push(1);
console.log("union array mixed -> " + mix);

//objects
let ninjaOne: object;
ninjaOne = {name:'youshi',age:30};

let ninjiaTwo: {
    name: string,
    beltColor: string,
    age: number
} 

ninjiaTwo = {
    name: 'mario',
    age: 20,
    beltColor : 'yellow'
}

