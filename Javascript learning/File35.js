// Array destruturing

// is used when we have to store the values of
// an array in some other variables


const array1=["value1","value2","value3","value4"];

// let index1=array1[0];
// let index2=array1[1];  [genrally we do this to store]

// console.log(index1);
// console.log(index2);


let [index1,index2,...mynewarray]=array1;    // [Array destructuring
                               // [This creates 2 variable and store the values on the indexes of an array accordingly]                          
console.log(index1);
console.log(index2);
console.log(mynewarray);


// To skip an Index we just need to put 2 commas(,) between the variables

// let [index1, ,index3]=array1; <--- This will skip the index 1 and jumps right on to the index 3 and store values accordingly




// To create an New array and store the rest of the value of the previous array in it 

// let [index1,index2,...mynewarray]=array1;

// index1 = value1
// index  = value2
// mynewarray = value3 and value4


