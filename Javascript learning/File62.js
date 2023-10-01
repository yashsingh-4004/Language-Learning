// Every method

/*
every method return True/false (boolean) values
every method return true value only if the condition
inside the callback function is applicable on all the 
elements inside of an array 
*/

/*
The callback function also return the True/false (boolean)
values 
*/


// const mynumbers=[2,4,6,8,10];

// const myfunc=(number)=>
// {
//     return number % 2 === 0;
// }

// console.log(mynumbers.every(myfunc));






const myproducts=[
    {productID:1, productname: "p1", price:500},
    {productID:2, productname: "p2", price:3000},
    {productID:3, productname: "p3", price:470},
    {productID:4, productname: "p4", price:190},
    {productID:5, productname: "p5", price:860},
];

// Check every product < 5000

const checkfunc=(number)=>
{
    return number.price < 5000;
}

console.log(myproducts.every(checkfunc));