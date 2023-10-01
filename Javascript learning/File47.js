// Hoisting

// Hoisting means that we can call the function
// before creating that function 

// for example:



myvar(); // <---- Here we call the function first

function myvar()
{
    console.log("im a variable");
}



// This can be done only with the "Function declaration"
// this can not be done with the "function expression" or
// "arrow functions"