const users = [
    { id: 1, name: "Anto", doj: "2020-01-01", userType: 'staff' },
    { id: 2, name: "Franklin", doj: "2005-06-15", userType: 'staff' },
    { id: 3, name: "Sam", doj: "2009-05-21", userType: 'hod' },
    { id: 4, name: "Kishor", doj: "20215-31-08", userType: 'staff' },
    { id: 5, name: "Modhi", doj: "2019-03-21", userType: 'staff' },
    { id: 6, name: "Bala", doj: "2017-08-11", userType: 'hod' }
]
const department = [
    { id: 1, name: "IT", hodID: 3 },
    { id: 6, name: "Mech", hodID: 6 }
]
const departmentStaffs = [
    { departmentID: 1, userID: 1 },
    { departmentID: 1, userID: 2 },
    { departmentID: 1, userID: 3 },
    { departmentID: 1, userID: 4 },
    { departmentID: 2, userID: 5 }

]
class User {
    #id = undefined;
    #name = undefined;
    #doj = undefined;
    #userType = undefined;
   /* constructor(id, name, doj, userType) {
        this.#id = id;
        this.#name = name;
        this.#doj = doj;
        this.#userType = userType;
    }*/
    get id() { return this.#id };
    get name() { return this.#name };
    get doj() { return this.#doj };
    get userType() { return this.#userType };

    set id(value) { this.#id = value };
    set name(value) { this.#name = value };
    set doj(value) { this.#doj };
    set userType(value) { this.#userType };

    getMyDataOfJoining() {
        console.log(this.#id)
    }
}
class Staff extends User{
    /*constructor(id, name, doj, userType) { }*/
    printMyHODName() {

        console.log("This is my HOD NAME---- ???")

    }
    getStudentList() {
        console.log("Student Names");
    }

}
const myUserID = 1;
/*
const myObj=users.find(userObj=>{

    if(userObj.id===myUserID){
        return true;
    }
    else{
        return false;
    }
})
*/
const myObj=users.find(userObj=>userObj.id===myUserID);
console.log(myObj)
//const user = new User(myObj);
//user.getMyDataOfJoining();
const staff=new Staff(myObj);
staff.getMyDataOfJoining();
console.log(staff.id);
console.log(staff.name);
staff.printMyHODName();
staff.getStudentList();

