// Intro to ARRAYS

// Arrays refers to a "Orderd collection of items"

let fruits = ["apple", "Mango", "orange"];
console.log(fruits);



// We can also print the items inside an arrays using indexes

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);



// We can store all types of datatypes in an array

let mixed=[1,2,3.4,"string",null,undefined];

console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log(mixed[3]);
console.log(mixed[4]);
console.log(mixed[5]);



// We can also change the items inside an array

let fruits1=["mango", "orange", "grapes"];

console.log(fruits1);

fruits1[2]="banana";

console.log(fruits1);



// We can also check the type of Arrays

console.log(typeof fruits);

console.log(Array.isArray(fruits));






