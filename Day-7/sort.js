const names = ["Kumar", "Prakash", "Santhos", "Udha"];
console.log("Before Sort :" + names);
names.sort();
console.log("After Sort :" + names);

const num = [10, 80, 30, 50, 70, 60.4];
console.log("Before Sort :" + num);
num.sort();
console.log("After Sort :" + num);

num.sort((a, b) => {
  return b - a;
});
console.log("Desc Compare Sort :" + num);
