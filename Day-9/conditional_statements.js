//----------If-----
/*
let studentAge = 5;

if (studentAge >= 3) {
    console.log("Yes");
}*/

/*
let studentName = "Prakash";//let studentName; 
if (studentName) {
    console.log(studentName.length);
}
console.log(studentName);*/

//------------Logical Operator------And| Or| Not
//let studentAge=3
/*
let studentAge = 2;
if (studentAge >= 3 && studentAge<=15) {
    console.log("Yes And");
}
if (studentAge >= 3 || studentAge<=15) {
    console.log("Yes Or");
}
if(studentAge && studentAge >=3 || studentAge<=15){
    console.log("Morthan Condition ")
}
    */
/*
function isEligible(age) {
 if (age > 3 && age <= 14)
 {
 
     return true;
 }
 
 else{
     return false;
 }

}
const studentAge = 4;
const ans = isEligible(studentAge);
console.log(ans);
*/
/*
function isEligible(age){
    if(!age){
        return false;
    }
    else if(age>=3 && age<=14){
        return true;

    }
    else{
        return false;
    }
}
let studentAge=55;
const ans = isEligible(studentAge)
console.log(ans)
*/

//-----Nested If-------
/*
function isEligible(age){
    if(!age){
        return false;
    }
    else{
        if(age >=3 && age <=14){
            return true;
        }
        else
        {
            return false;
        }
    }
}
const studentAge=55;
let ans=isEligible(studentAge);
console.log(ans)
*/

//-------Switch Condition-------
/*
function isEligible(age) {
    switch (age) 
    {
        /*case 1:
            console.log("First Conditon True");
            break;
        case 2:
            console.log("Second Condition True");
            break;
            
        case 1:
        case 2:
            return false;
            break;
        case 3:
            console.log("Three Condition True");
            break;
        case 4:
            console.log("Foure Condition True");
            break;
        case 5:
            console.log("Five Condition True");
            break;
        case 6:
            console.log("Six Condition True");
            break;
        case 7:
            console.log("Seven Condition True");
            break;
        default:
            console.log("Inside Default");
            break;
    }
}
const studentAge = 9;
let ans = isEligible(studentAge);
console.log(ans)
*/
/*

function isMale(gender){
    switch(gender){
        case "male":
            console.log("This student is a male");
            break;
            case "female":
            console.log("This student is a female");
            break;
    }
}
const studentGender="male";
let ans=isMale(studentGender);
console.log(ans);
*/

//------Thanar Operator---
/*
let a = 10;
let b = 10;
let isEqual = a == b;
console.log(isEqual)
if (a == b) {
    console.log("A and B Equal");
}
else {
    console.log("A and B is Not Equal");
}
let tanarOperator = a == b ? true : false
console.log(tanarOperator)
*/
let a = 10;
let b = 20;
let c = 30;
if (a > b) {
    if (a > c) {
        ans = a;
    }
    else {
        ans = c;
    }
}
else if (b > c) {
    ans = b
}
else {
    ans = c;
}
ansGrethan = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log("Grethan = ", ansGrethan)
console.log(ans)