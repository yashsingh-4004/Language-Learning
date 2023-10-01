// Important methods of array

// 2. map method  <--- Important



// map method is used on array
// it takes a array and a function to be useful
// the function contain some task regarding the a
// array and "map method" takes that function
// process whatever task that function contains
// and stores that inside an new array which is
// created by the Map method itself




// const myarray=[2,4,6,8,10];

// const myfunc=(number)=>
// {
//     return number * number;
// }


// console.log(myarray.map(myfunc));




// it is important to know that if your function
// dont return something and direct print the task
// then the "map method" will process and print 
// the task inside that function as an output but 
// it will not process that data inside an array
// so when using the "map method" it is important to
// remember that we have to return the task inside the function 
// instead of console.log it




// const myfunc=(number)=>
// {
//     console.log(number*number);
// }


// const myvar=myarray.map(myfunc);

// console.log(myvar);  <--- this will create a array which has all the values as undefined 





const persons=[
    {firstname:"dinesh",age:18},
    {firstname:"rajesh",age:20},
    {firstname:"jignesh",age:22},
    {firstname:"dipesh",age:24},
]

const myfunc=(users)=>
{
    return users.firstname;
}

const myvar=persons.map(myfunc);

console.log(myvar);