const a = [10, 20, 30];
const b = [40, 50, 60];
const c = [70, 80, 90];
let d = a.concat(b);
console.log("a+b :", d);
d = a.concat(b, c);
console.log("a+b+c", d);
console.log(a + b + c);
