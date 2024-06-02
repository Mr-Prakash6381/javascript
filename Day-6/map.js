//map(value,index,array)
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqrt = num.map((value) => {
  return Math.sqrt(value).toFixed(2);
});
console.log(sqrt);
