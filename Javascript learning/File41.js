// Object destruturing

// used when we have to store the key values inside
// an Object as variables 

const singer={
    name:"The weeknd",
    famoussong:"out of time",
    year:2022,
    Anotherfamoussong:"blinding lights"
}



// Genrally we do this to destructure the object

// const name=singer["name"];
// const famoussong=singer["famoussong"];

// console.log(name,famoussong);




// Simple way to do destructuring of objects

const {name,famoussong}=singer; // <----- This created 2 variables and gave them the value of specific keys inside the object

console.log(name);
console.log(famoussong);



// We can also create variables named diffrent other than the keys

const {name:var1,famoussong:var2}=singer;

console.log(var1);
console.log(var2);



// We can also put the create a new Object and put all 
// Rest of the key pair values in it

const {...restoftheprops}=singer; // <--- This creates a new object

console.log(restoftheprops);


