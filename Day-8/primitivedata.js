let name = "Prakash"; //String
let age = 30; //Number
let istudent = false; //Boolean
let x; //Undefined
let id = Symbol; //Symbol

let user = { name: "Prakash", age: 30 };
let user2 = user;
user.age = 25;
console.log(user.age);
console.log(user2.age);

let t = 10;
let y = t;
t = 20;
console.log(t);
console.log(y);

let user3 = { name: "Bala", age: 25 };
let user4 = user3;
user3.age = 35;
console.log(user3.age);
console.log(user4.age);
