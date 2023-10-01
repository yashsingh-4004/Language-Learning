// Find Method

// const myarray=["lion","cat","dog","rabbit"];

// const myfunc=(string)=>{
//     return string.length === 3;
// }

// console.log(myarray.find(myfunc));




const users=[
    {userId:1, username:"user1"},
    {userId:2, username:"user2"},
    {userId:3, username:"user3"},
    {userId:4, username:"user4"},
    {userId:5, username:"user5"},
    {userId:6, username:"user6"},
]


const finduser=(user)=>{
    return user.userId === 3;
}

console.log(users.find(finduser));