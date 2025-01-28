//-----arrayDestructuring---------------
/*
const names=['Ajay','Babu','Dhanus'];
//const names=[undefined,'Babu','Dhanus'];
//const names=[null,'Babu','Dhanus'];
console.log(names);
//const[names1,names2,names3]=names;
//const[names1='Defaut Name',,names3]=names;
//const[names1,...names3]=names;
//const[names1,...[names3]]=names;
const[names1,...[,names3]]=names;
console.log(names1);
//console.log(names2);
console.log(names3); 
*/
//-----------objectDestructuring----------
/*
const employee = {
    //firstName:'Vishal',
    //lastName:'Babu',
    name: {
        firstName: 'Vishal',
        lastName: 'Babu',
    },
    age: 19,
    isMajor: true,
}
const { firstName } = employee;
console.log(employee.firstName);
console.log(firstName)
//const{name}=employee;
const {name}=employee;
const{name:{firstName}}=employee;
console.log(name);
console.log(firstName);
console.log(employee.name.firstName);
*/
//--------realTimeExample--------------
/*
let a = 10;
let b = 20;
let arr = [a, b];
console.log(arr);
//[b, a] = arr;
[b,a]=[a,b];//oneLineSwaping
console.log(a, b);
*/
/*
const employee={
    firstName:'Surach',
    lastName:'Babu',
    age:25
}
function printNameAndAge(){
    console.log(employee.firstName + '----' +employee.age);
}
printNameAndAge(employee);
*/
/*
const employee={
    firstName:'Surach',
    lastName:'Babu',
    age:25
}
function printNameAndAge({firstName="Default Name",age="Undeife Age"}){
    //console.log(employee.firstName + '----' +employee.age);
    console.log(firstName+'----'+age);
}
printNameAndAge(employee);
*/
/*
function calculate(a,b){
    const addition=a+b;
    const sub=a-b;
    const mul=a*b;
    //return [add,sub,mul];
    //return {add,sub,mul};//{add:add,sub:sub,mul:mul}
    return{add:addition,sub,mul};
}
//const ans=calculate(10,20);
//console.log(ans);

const [add,sub,mul]=calculate(10,20);
console.log(add);
console.log(sub);
console.log(mul);


const ans=calculate(10,20);
console.log(ans);

const{add,sub,mul}=calculate(10,20);
console.log(add);
console.log(sub);
console.log(mul);
*/
/*
const employee = [
    { name: 'Karthi', age: 30 },
    { name: 'Venket', age: 25 },
]
console.log(employee);
[emp1, emp2] = employee;
console.log(emp1);
console.log(emp2);

[{ name }] = employee;
//[,{age}]=employee;
[{ age }, { age }] = employee;
console.log(name);
console.log(age);
[{ age: name1Age }, { age: name2Age }] = employee;
console.log(name1Age);
console.log(name2Age);
[{ name: name1Name }, { name: name2Name }] = employee;
console.log(name1Name);
console.log(name2Name);
*/
const employee = {
    company1: ['Anto', 'Franklin'],
    company2: ['Jasmine', 'Sam']
}
//const {company1}=employee;
//console.log(company1);
//const {company1:[,name]}=employee;
//console.log(name);
//const {company2:[name1]}=employee;
//console.log(name1);
const {company1:[name1],company2:[name2]}=employee;
console.log(name1);
console.log(name2);