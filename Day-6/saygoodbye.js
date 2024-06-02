//Say goodbye to concatenation how to use template literals in javascript
let full_name = "Prakash";
let age = "12";
let city = "Kpm";
let role = "web Developer";
console.log(full_name);

let output = " ";
output =
  "<table border='1'><tr><th>Name</th><td>" +
  full_name +
  "</td></tr><tr><th>Age</th><td>" +
  age +
  "</td></tr><tr><th>City</th><td>" +
  city +
  "</td></tr><tr><th>Role</th><td>" +
  role +
  "</td></tr></table>";

//es5
output +=
  "<hr><table border='1'>" +
  "<tr><th>Name</th><td>" +
  full_name +
  "</td></tr>" +
  "<tr><th>Age</th><td>" +
  age +
  "</td></tr>" +
  "<tr><th>City</th><td>" +
  city +
  "</td></tr>" +
  "<tr><th>Role</th><td>" +
  role +
  "</td></tr>" +
  "</table>";

//es6
output += `<hr>
<table border='1'>
  <tr><th>Name</th><td>${full_name}</td></tr>
  <tr><th>Age</th><td>{age >= 25 ? "Good" : "Bad"}</td></tr>
  <tr><th>City</th><td>${city}</td></tr>
  <tr><th>Role</th><td>${role}</td></tr>
</table>`;
