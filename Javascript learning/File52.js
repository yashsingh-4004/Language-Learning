// Rest perameters

const myfunc=(a,b,c)=>
{
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myfunc(1,2,3); // <--- this will works as usual



// what if we have more than 3 values inside 
// function?



myfunc(1,2,3,4,5) // <---- This will only give us the 1,2,3 as the output




// what if we want the "a=1","b=2","c=3,4,5"
// To do this we use "Rest perameters"
// To use rest perameters we have create a perameters using "...c" like this




const myfunc2=(a,b,...c)=>
{
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myfunc2(1,2,3,4,5);














const myfunc3=(...numbers)=>
{
    let total = 0;
    for(let number of numbers)
    {
        total = total+number;
    }
    return total;
}

let answer=myfunc3(1,2,3,4,5);

console.log(answer);