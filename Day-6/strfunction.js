let first_name = "Prakash";
let last_name = "Web Developer";

//concatenation
let c = first_name + "" + last_name;
console.log("Concatenation:" + c);
//concat
c = first_name.concat(" ", last_name);
console.log("concat :" + c);
//append
c = "Prakash";
c += "web Developer";
console.log("Append:" + c);
//Escaping
c = first_name.length;
console.log("length:" + c);
//Change Case
c = first_name.toLocaleUpperCase();
console.log("Uppercase:" + c);
c = first_name.toLocaleLowerCase();
console.log("lowercase:" + c);

c = first_name.indexOf("h");
console.log("Indexof:", c);

c = first_name.lastIndexOf("r");
console.log("lastIndexof:" + c);

c = first_name.charAt(1);
console.log("CharAt:" + c);

c = first_name.charCodeAt(2);
console.log("charCodeAt:" + c);

c = first_name.substring(0, 3);
console.log("SubString:" + c);
//Substring

let text = "012394858567674";
c = text.substring(4);
console.log("SubString:" + c);

c = text.substring(4, 0);
console.log("SubString:" + c);

c = text.substring(10, 15);
console.log("SubString:" + c);

c = text.substring(-3);
console.log("SubString:" + c);

//Slice
c = text.slice(2, 4);
console.log("Slice :" + c);

c = text.slice(4, 2);
console.log("Slice :" + c);

c = text.slice(10, 15);
console.log("Slice :" + c);

c = text.slice(-3);
console.log("Slice :" + c);

//Split in JS

let a = "Java Script";
c = a.split(" ");
console.log("Split:" + c);
console.table(c);

//replace in js
a = "I am from Salem";
console.log("Before Replace:" + a);
c = a.replace("Salem", "Chennai");
console.log("After Replace:" + c);
//includes in js
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("rat"));

//trim in js
a = "joes";
console.log("Before Trim : " + a.length);
a = a.trim();
console.log("After Trim : " + a.length);

//padstart padend
a = "5";
a = a.padStart(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, "$");
console.log(a);

//Long literal strings
//Method-1
let longstring =
  "C is a powerful general-purpose programming language" +
  "developed at at & t's bell laboratories of usa in 1972" +
  "it was designed and written by bennis ritchie";
console.log(longstring);
//method-2
longstring =
  "C is a powerful general-purpose programming language" +
  "developed at at & t's bell laboratories of usa in 1972" +
  "it was designed and written by bennis ritchie";
console.log(longstring);
