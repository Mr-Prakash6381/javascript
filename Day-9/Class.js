/*
class Employee{
   // employeeName='Babu';
    print(){
        console.log(this.employeeName);
    }




}
let employee=new Employee();
//employee.employeeName="Anto"
//console.log(employee.employeeName);
employee.print();

let emp2= new Employee();
emp2.employeeName="Venket";
//console.log(emp2.employeeName)
emp2.print()
*/
/*
class Employee{
    print(name){
        this.employeeName=name;
        console.log(name);
    }
    specialPrint(){
        console.log("Special Name -" + this.employeeName)
    }
}
let employee= new Employee();
employee.print('Welcome');
employee.specialPrint();
*/
//-------setFunctionCopy------------

/*
class Employee {
    set employeeName(name) {
        this.name = name;
    }
    specialPrint() {
        console.log("Special Name - " + this.name);
    }
}
let employee = new Employee();
employee.employeeName = 'Prakash';
employee.specialPrint();
*/
//-------getFunction----------
/*
class Employee{
    name='prakash';
    get employeeName(){
        return this.name
    }
}
let employee=new Employee();
console.log(employee.employeeName)
*/
//---------privateVariable----------
/*
class Employee {
    #name='setFunction'
    set print(name) {
       this.#name=name;
    }
    specialPrint(){
        console.log(this.#name)
    }
}
let employee = new Employee();
employee.specialPrint();
//employee.print='Welcome to set function';
*/
//-------PrivateFunction----------
/*
class Employee {
    #salary = 500;
    get employeeSalary() {
        return '₹' + this.#calculateSalary();
    }
    #calculateSalary() {
        this.#salary = this.#salary + 500;
        return this.#salary;
    }
}
let employee = new Employee();
console.log(employee.employeeSalary);
*/
//------------Constructor---------
class Employee {
    #name;
    #salary;
    constructor(name, salary) {
        //console.log("Constructor")         
        this.#name = name;
        this.#salary = salary;
    }
    get seicalPrint() {
        console.log(this.#name, this.#salary);
        //return this.#salary;

    }

}
let employee = new Employee("Prakash", 500);
console.log(employee.seicalPrint)