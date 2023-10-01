// How to clone array

// There are 3 ways by which we can clone array

let array1=["item1","item2"];

// 1. let array2=array1.slice(0);

// 2. let array2=[].concat(array1);

// 3. let array2=[...array1];




// How to concatenate Array

let array2=["item3","item4"];

let array3=[...array1,...array2];




console.log(array1===array2);
console.log(array1);
console.log(array2);
console.log(array3);