// Block scope vs function scope

// let and const are block scope
// var is function scope



// {
    // This is a block
// }



// let and const variables can only be accessable
// inside the blocks they were created


// For example:


// {
//     let myvar1="value1";
//     const myvar2="value2";
// }


// console.log(myvar1);  (This will give us an error)
// console.log(myvar2);


{
    let myvar1="value1";
    const myvar2="value2";


    console.log(myvar1);
    console.log(myvar2);
}


// In case of variables created using Var : they
// can easily be accessable outside from its 
// block.   for example:

{
    var myvar3="value3";
}

console.log(myvar3); // <---- This will not provide us an error











const myfunc=()=>
{
    if(true)
    {
        var myvar="value1";
        console.log(myvar);
    }
    console.log(myvar);
}

myfunc();