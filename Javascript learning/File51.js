// Default perameters

const myfunc=(num1,num2)=>
{
    console.log(num1+num2);
}

myfunc(5,5);



// If we dont put the second number
// then it will give us the NaN as the output
// one of the values will be taken as undefined

myfunc(4); // <---- this will give us NaN



// To deal with this undefined problem javascript
// introduced default perameters


const myfunc2=(num1,num2=0)=>
{
    console.log(num1+num2);
}

myfunc2(5);


// The "num2=0" perameter will be taken defaulty 
// as 0 if user dont gave any value to the perameter




// Before Default perameters coders use to deal with
// this problem like this : 


const myfunc3=(a,b)=>
{
    if(typeof b==="undefined")
    {
        b=0;
    }

    console.log(a+b);
}

myfunc3(23);