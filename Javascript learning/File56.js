//  important array methods

// forEach
// map          <--- very important
// filter
// reduce




// forEach

// forEach method is used when we got an array
// and a function which has some task inside it
// and we have to perform that task on the 
// all the elements inside that array


// like in the below example we got an array
// and we have to multiply and print all the
// elements with the 2

// remember that in your function the 2nd perameter
// will always be show you the index of that 
// perticular array element while using forEach method




const myarray=[2,4,6,3,5];

const myfunc=(number,index)=>
{
    console.log(`index is ${index}`);
    console.log(`${number}*2 = ${number*2}`);
}




// genrally we apply the Loop and call the function
// inside that loop


// for(let i=0; i<myarray.length; i++)
// {
//     myfunc(myarray[i],[i]);
// }




// but there is a easier way i.e using forEach method

// to use the forEach method the syntext of forEach
// should be like this 

// array-name.forEach(function name)




myarray.forEach(myfunc);