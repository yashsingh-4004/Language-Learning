// Some method

/*
Every method return the True/false (boolean value)
according to the condition given inside the callback
function which is appicable on the all the values in
the array 
*/

// const myarray=[3,5,9,11];

// const myfunc=(number)=>
// {
//     return number % 2 === 0;
// }

// console.log(myarray.some(myfunc));




const myproducts=[
    {productID:1, productname: "p1", price:500},
    {productID:2, productname: "p2", price:3000},
    {productID:3, productname: "p3", price:470},
    {productID:4, productname: "p4", price:190},
    {productID:5, productname: "p5", price:860},
];


const above2000=(number)=>
{
    return number.price > 2000;
}


console.log(myproducts.some(above2000));