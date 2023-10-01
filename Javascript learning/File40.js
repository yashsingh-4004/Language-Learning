// Spread oprators in objects


const Obj1={
    key1:"value1",
    key2:"value2",
}

const obj2={
    key3:"value3",
    key4:"value4"
}

const obj3={...Obj1,...obj2}

console.log(obj3);




// Some Important points to remember:

// You cannot put 2 same keys inside an object
// as the 2nd key will Overwrite the 1st one 

// For example :


// const obj1={
//     key1:"value1",
//     key2:"value2",
//     key1:"value3"  // <----- This key will overwrite the firstone
// }

// console.log(obj1);
