// primitive and Reference datatypes

// primitive 

let num1=5;
let num2=num1;
num1++;

console.log("value of num1",num1);
console.log("value of num2",num2);

// The values of variables are stored in stack in the memory
// every value of variable get a new place in a stack
// thats why :
//              let num1=5;
//              let num2=num1;
//              num1++;
// Doesnt affect the value of num2 as num2 value has its own place in the stack in the memory




// Reference 
// array

let array1=["item1","item2"];
let array2=array1;
array1.push("item3");

console.log(array1);
console.log(array2);

// Like primitive Datatypes , Refrence datatype doesnt get stored in memory rather it gets stored in "HEAP"
// Every Datatype which gets stored in Heap has its own address which gets stored in Stack of the memory
// so if : 
//         let array1=["item1","item2"];
//         let array2=array1;

// Both Array1 and Array2 has the same address stored in stack of memory
// So changing the value of one Reference datatype will leads to changing the value of other datatype which is assosiated with the first one 