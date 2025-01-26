schoolAStudents = ['Anto', 'Franklin'];
schoolBStudents = ['Jamsine', 'Sam'];
//students = schoolAStudents.concat(schoolBStudents);
students = [...schoolAStudents, ...schoolBStudents, "Aijay", "Murgan"]
console.log(students);
//------------------------
studentName = {
    firstName: "Franklin",
    lastName: "Anto",
}
studentsDetails = {
    age: 33,
    gender: "Maile",
    email: "subscriber@123gmail.come"
}
studentFullDetails = { ...studentName, ...studentsDetails, country: "Indian" };
console.log(studentFullDetails);
//-----------------StringSpread-------------
stringSpread = "StringSpread"
ans = [...stringSpread]
console.log(ans);
//---------------
function sum(...inputValues) {
    ans = 0
    for (let i = 0; i < inputValues.length; i++) {
        ans = ans + inputValues[i]
    }
    console.log(ans)
}
input=[1,2,3,4,5,6];
sum(...input)
//------------------------
numbers=[5,2,4,7,8];
//const ansNumbers=Math.max(5,112,1131,41);
const ansNumbers=Math.min(...numbers)
console.log(ansNumbers)