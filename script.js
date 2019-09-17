//Zadanie 1
let first = "Hello";
let second = "world!"

console.log(`${first} ${second}`);

//Zadanie 2
const multiply = (a = 1,b = 1) => console.log(a*b);
multiply(2);

//Zadanie 3
const average = (...args) => [...args].reduce((a, b) => (a + b)/(), 0);
const logAllArguments = (...args) => args.forEach(arg => console.log(arg));