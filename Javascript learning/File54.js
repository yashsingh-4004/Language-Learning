// Callback functions 

// Callback functions is used when we have to 
// use a function as a perameter inside a function



const myfunc=(callback)=>
{
    console.log("my name is jake");
    callback();
}


const myfunc2=()=>
{
    console.log("im logan paul");

}


myfunc(myfunc2);