// Function returing Function


// We can create a function inside an function


const myfunc=()=>
{
    const myfunc2=()=>
    {
        console.log("my string");
    }
    return myfunc2;
}

const answer=myfunc(); // <--- values of myfunc() function is stored in variable answer
console.log(answer);


// This will creates the variable "answer" as a function 
// which has the values of myfunc2 function inside it

// so when we call the answer variable 
// it will provide us the values inside the myfunc2() function

answer();





