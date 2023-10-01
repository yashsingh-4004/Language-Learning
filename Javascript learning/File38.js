// How to irerate objects ( loops in Objects )

const person={
    name:"yashveer",
    age:20,
    hobbies:["drawing","listining music","gymming"]
}

// for in loop Method


// / This " for in loop" in object will provide us
// the keys in the object as output


for(let key in person)
{
    console.log(key);
}




// To get the values of the key rather than the keys
// We have to run loop like this:


for(let key in person)
{
    console.log(person[key]);
}




// To get the both Key and its value as the output
// we have to run loop like this:


for(let key in person)
{
    console.log(key,":",person[key]);
}




// Object.keys Method

// This method will provide us the All the in the object
// inside an array


console.log(Object.keys(person));


// Now we can put this into an "For of loop" to 
// Get the keys into loops


for(let key of Object.keys(person))
{
    console.log(key);
}




// To get the values of the keys as the output
//  we have to do this 


for(let key of Object.keys(person))
{
    console.log(person[key]);
}



// To get both the key and its values as the output 
// we have to do this 

for(let key of Object.keys(person))
{
    console.log(`${key} : ${person[key]}`);
}