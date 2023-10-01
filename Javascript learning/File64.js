// Fill method

// value,start,end

// const myarray = new Array(10).fill(-1);
// console.log(myarray);


const myarray=[1,2,3,4,5,6,7,8];

// 3,4,5 ---> 0

myarray.fill(0,2,5); // --->  the last index didnt include itself

console.log(myarray);