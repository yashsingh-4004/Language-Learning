// Nested destructuring


const array1=[
    {name:"yashveer",course:"PGDCA",gender:"male"},
    {name:"bablu",course:"MBA",gender:"Chad"},
    {name:"lvish",course:"BCA",gender:"male"},
]

// This will create 3 variables named User1,user2,user3
// storing the value of 3 objects accordingly



const [user1,user2,user3]=array1;

console.log(user1);
console.log(user2);
console.log(user3);



// To get the specific keys value pairs inside a variables
// we have to use {} 


const [{name},{course},{gender}]=array1;

console.log(name);
console.log(course);
console.log(gender);


// To store the value of key value pairs in some other 
// variables

const [{name:username},{course:postgraduation},{gender:sex}]=array1;

console.log(username);
console.log(postgraduation);
console.log(sex);