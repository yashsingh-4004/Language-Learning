// Diffrence between dot and ssquare bracate notation


// We cannot name key using 2 words as in javascript
// spaces are strictly prohabited

// for example:

// const person={
//     My name:"yashveer", <----- This type of name of a key leads to an error
//     age:20,
// }




// But still if we want to name a key using 2 words then we have to put them into strings ["string"]

// for example:



let key="email";

const person={
    "My name":"yashveer", //<----- Now it wont give us a error
    age:20,
}




// We cannot print the "my name" key using the Dot notation as spaces are strictly prohabited in javascript

// console.log(person.My name); <----- Provides an Error


// To print these kind of key we have to use [] notations

console.log(person["My name"]); //<----- This will not provide us an Error




// To add some value of any variable as a key in an Object we have to do this


person[key]="abc12@gmail.com";

console.log(person);



