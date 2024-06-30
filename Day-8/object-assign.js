const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj5 = { a: 10, b: 20 };
const obj6 = { c: 30, d: 40 };
const obj7 = { ...obj5, ...obj6 };
console.log(obj7);
