// Function expression

const nameofthefunction=function()
{
    console.log("Happy birthday");
}

nameofthefunction(); 





const addition=function(number1 , number2)
{
    return number1+number2;
}

console.log(addition(50,50));






const trueorfalse=function(number1)
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




const firstindex=function(anystring)
{
    return anystring[0];
}

console.log(firstindex("yashveer"));





const findtarget=function(array,target)
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