let greet = () => {
    console.log("greet from greet function")
}

let fucn_var: Function;
fucn_var = () => {
    console.log("fucn_var")
}

const add = (a:number, b:number,c?:number | string):void => {
    console.log(a+b)
}
add(3,2);

const add_with_default_c = (a:number, b:number,c:number | string=10) => {
    console.log(a+b)
    console.log("default value of c is " +c + ", and type is " + typeof(c))
}

add_with_default_c(3,3);
add_with_default_c(3,3,3);
add_with_default_c(3,3,'20');

const minus = (a: number, b: number) => {
    return a-b;
}

let result = minus(2,1);
console.log("minus result " + result);

const minus_with_return_type = (a: number, b: number): number => {
    return a-b;
}

console.log(minus_with_return_type(10,7));