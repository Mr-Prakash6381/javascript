/*const person={
    name :"Prakash",
    age:20,
};
function printName(){
console.log(person.name);
console.log(person);
};
printName();
printName();
*/


//--------Pramiter----------


/*
const person2={
    name :"Prabu",
    age:20,
};
function printName(name,age){
console.log(name,age)
}
printName(person2);
printName(person2.name,person2.age);
printName(person2.age);
printName("Send Pramiter",23);
printName("Sanjay")

*/

/*
const person2={
    name :"Prabu",
    age:20,
};
function printName(person2){
console.log(person2.name,person2.age)
console.log(person2.name)
console.log(person2.age)
}
printName(person2);
printName({name:"Bala",age:22})
*/

//-----Default value-----

/*
const person2={
    name :"Prabu",
    age:20,
};
function printName(person2={name:"Default Name",age:0}){
console.log(person2.name,person2.age)
}
printName(person2);
printName();
//---------------------------------
function printName2(name="Default____Name"){
    console.log(name);
}
printName2()
printName2("prakash")


//-----Rest Parameter-------

function printPerson(...agr){
    console.log(agr);
}
printPerson(person2,"More than number agrument sending")
*/

//------Return the Value-------
/*
function getFullName(firstName,lastName)
{
   if(firstName==='' && lastName==='')
    {
        reutrn 
        //const name=firstName+' '+lastName;
      //  console.log(name);
    }
    //console.log("Check the user input");
   //const name=firstName+' '+lastName;
   //const name=[firstName,lastName]
  // const name={firstName:firstName,lastName:lastName}
 // const name={firstName,lastName};
      return name;
       console.log(name);
}
let fullName=getFullName("Web","Developer");
let fullName=getFullName(1,2);
let fullname=getFullName("Web","Developer")
console.log(fullName)
console.log(fullname)
*/

//-----Inner Function-----

/*function getFullName(firstName,lastName)
{
    function join(name1,name2)
    {
        const name=name1+" "+name2
        return name;
    }
    const fullName=join(firstName,lastName);
    return fullName;
}
let fullName = getFullName("Murali","Kumar");
console.log(fullName)
*/

//--------Anonymous Function------

/*const getFullName=function(firstName,lastName){
    return firstName+" "+lastName;
}
const fullName=getFullName("Mudrai","Muthu");
console.log(fullName)*/

//----------Arrow Function-----

/*const getFullName=(firstName,lastName)=>{
    return firstName+" "+lastName;
}
const fullName=getFullName("Mudrai","Muthu");
console.log(fullName)
*/

const getFullName=(firstName,lastName)=>firstName+" "+lastName;
let fullName=getFullName("DP","Muthu");
console.log(fullName)
