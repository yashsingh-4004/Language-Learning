// lexical scope



const myfunc=() =>
{
    const myvar="value1";

    const myfunc2=()=>
    {
        const myvar="value2";
        console.log("inside myfunc", myvar)
    }


    console.log(myvar);
    myfunc2();
}

myfunc();



// First the function "myfunc2" will search the variable
// "myvar" inside its own function and execute opration
// accordingly.

// but if "myfunc2" function was unable to search the 
// variable "myvar" inside its function then javascript
// will search the variable in "myfunc" function and process
// accordingly. This is known as lexical scope.