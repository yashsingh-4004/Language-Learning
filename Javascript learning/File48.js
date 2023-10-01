// Function inside functions

// We can create as many as functions inside 
// a function 

// for example:

const myfunc=() =>
{
    

    const helloworld=()=>
    {
        console.log("hello world");
    }


    const addition=(num1,num2)=>
    {
        console.log(num1+num2);
    }


    const multiplication=(number1,number2)=>
    {
        console.log(number1*number2);
    }

    console.log("hello function");
    helloworld();
    addition(20,20);
    multiplication(10,10);
}

myfunc()
