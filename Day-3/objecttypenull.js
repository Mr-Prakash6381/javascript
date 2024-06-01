console.log("Object type null");
user = { name: "Prakash", age: 20 };
console.log(user);
console.log(user.name);

const greeting = (user) => {
  const name = user.name ? user.name : "No Name";
  return "Hello" + name;
};
console.log(greeting(user));
