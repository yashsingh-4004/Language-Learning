// Function decleration

// functions do some work for us
// sometimes we have to do some task again and again many times
// instead of repeating the coding lines again and again 
// We can simply create a functon soo that when we have to repeat that work
// We can simpily call that function

// To creat a function




function nameofthefunction()
{
    console.log("Happy birthday");
}

nameofthefunction(); // <---- This will call the functon





// We can call function numourous times




function addition(number1 , number2)
{
    return number1+number2; // <---  here "return" will do our work it wont give us the output
}

console.log(addition(50,50));


// The values we put inside the () while creating a function 
// will creates 2 "Perameters" in which we can can put values
// while calling the function the values we put inside () 
// will directly be assigned into the perameters




function trueorfalse(number1)
{
    if(number1%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(trueorfalse(4));




function firstindex(anystring)
{
    return anystring[0];
}

console.log(firstindex("yashveer"));





function findtarget(array,target)
{
    for(let i=0; i<array.length; i++)
    {
        if(array[i]===target)
        {
            return i;
        }
    }
    return -1;
}


const array1=[1,4,6,3,8];


const answer=findtarget(array1,8);

console.log(answer);