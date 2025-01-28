//primutueDataType
/*
let num1=10;
 console.log(num1);
 let num2=num1;
 console.log(num2)
 console.log(" ")
 num1=20;
 console.log(num1);
 console.log(num2);*/

//ReferenceDataType
/*
let company1Employees=['Venket','Kishor'];
let company2Employees=company1Employees//['Gokul','Modhi'];
console.log(company1Employees);
console.log(company2Employees);
company1Employees.push('Frederick');
console.log(company1Employees);
console.log(company2Employees);
let str=JSON.stringify(company1Employees);
console.log(str)
let company22Employees=JSON.parse(str);
console.log(company22Employees);
*/
//Array
let company1Employees = ["Anto", 'Jasmine'];
let company2Employees = [...company1Employees];
console.log(company2Employees);
//Object
let emp1 = {
    name: 'Franklin',
    comapny: 'HCL'
}
//emp2=emp1;
//emp2=JSON.parse(JSON.stringify(emp1));
//emp2={...emp1};
emp2 = Object.assign({}, emp1);
emp1.name = 'Anto';
console.log(emp1)
console.log(emp2)

let companyDetails = {
    companyName: 'JAFS',
    employees: [
        { name: 'Anto' },
        { name: 'Franklin' }
    ]
}
//let newDetails={...companyDetails};
let newDetails = { ...companyDetails, employees:[{ ...companyDetails.employees[0] },{...companyDetails.employees[1]}] };
//console.log(newDetails);
//console.log(companyDetails);

companyDetails.companyName = 'JAFS Code School';
companyDetails.employees[0].name = 'Anto1';

console.log(' ');

console.log(newDetails);
console.log(companyDetails);