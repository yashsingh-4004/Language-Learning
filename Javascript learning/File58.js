// Important methods in Array 


// 3. filter method


// filter method is used to filter out the values
// inside an  array as per the task given inside
// the function

// filter method gives us the boolean values (True or false)
// The function will take the values inside an array
// and puts it inside a function if that value returns
// returns the value as "True" then the filter method 
// will take that value and puts it inside an new array




const myarray=[1,2,5,6,9,10,13,14];


const iseven=(number)=>
{
    return number%2===0;
}


const myvar=myarray.filter(iseven);


console.log(myvar);




