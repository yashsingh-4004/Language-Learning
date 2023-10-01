// Important methods in Array 


// 4. Reduce method 


/* Reduce method takes the all values inside an 
array and reduce it to one value as per the task
stated inside the function */


const myarray = [1,2,3,4,5];


/* For example we have a array having 5 diff
values inside it if we print the myarray then 
it will give us the 5 diff values inside an array 
as an output

But The "Reduce method" will reduces the array into 
one single value as per whatever the task was assigned 
inside the function */


const myfunc=(accumulated , currentValue)=>
{
    return accumulated + currentValue;
}

console.log(myarray.reduce(myfunc));  // <--- This will provide us with a single value



/*

accumulated     currentValue     return

    1               2              3

    3               3              6

    6               4              10

    10              5              15

*/




const users=[
    {productid:1 , prodname:"mobile" , price:12000},
    {productid:1 , prodname:"laptop" , price:59000},
    {productid:1 , prodname:"charger" , price:3000},
]


const totalamount = users.reduce((totalprice,currentproduct)=>{
    return totalprice + currentproduct.price;
},0);

console.log(totalamount);
