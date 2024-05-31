let a;
a = 25;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

//string to number
a = "125";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);
a = "35.55";
console.log(a, typeof a);
a = parseintfloat(a);
console.log(a, typeof a);

//type coercion

var c = "25";
let b = 10;
console.log(c + b);
a = Number(c);
console.log(c + b);
