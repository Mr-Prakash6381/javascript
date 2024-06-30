const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice :" + n1);
let removed_elements = n1.splice(2);
console.log("Removed Items :" + removed_elements);
console.log("After Splice :" + n1);
console.log("\n\n");

const n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before splice :" + n2);
removed_elements = n2.splice(2, 2);
console.log("Removed Items :" + removed_elements);
console.log("After Splice:" + n2);
