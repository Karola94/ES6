//Zadanie 1
let first = "Hello";
let second = "world!"

console.log(`${first} ${second}`);

//Zadanie 2
const multiply = (a = 1,b = 1) => console.log(a*b);
multiply(2);

//Zadanie 3
const logAllArguments = (...args) => {
    let score = 0;
    args.map(arg => score+=arg);
    console.log(parseFloat(score/args.length, 4).toFixed(2));
  }  
logAllArguments(1,2,3,8);

//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
logAllArguments(...grades);

//Zadanie 5
const tab = [1, 4, 'Iwona', false, 'Nowak'];
const [first, second, firstName, fourth, lastName] = tab;
console.log(`${firstName} ${lastName}`);