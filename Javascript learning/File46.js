// Arrow function 

// Arrow function is just like "function decleration"
// and "Function decleration" 

// The small diffrence is that we use "=>" after the ()
// arrow function 

// and in "function decleration" and "Function decleration"
// we use function() to declare the function


const singhappybirthday=() =>
{
    return "happybirthdaytoyou";
}

console.log(singhappybirthday());




const addition=(number1,number2) =>
{
    return number1+number2;
}

console.log(addition(34,56));





const trueorfalse=(number) =>
{
    if(number%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(trueorfalse(34));




const somestring=(anystring) =>
{
    return anystring[0];
}

let mystring=prompt("type something")


console.log(somestring(mystring));




const myloop=(array,target) =>
{
    for(let i=0; i<array.length; i++)
    {
        if(array[i]===target)
        {
            return i;
        }
    }
    return "no value inside the array";
}

const myarray=[2,334,5,323,5265,234,45,35,2546,54];
let mytarget=Number(prompt("type number"));


console.log(myloop(myarray,mytarget));



