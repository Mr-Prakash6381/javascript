students = [
    { id: 1, name: "Franklin", },
    { id: 2, name: "Anto" },
    { id: 3, name: "Sanoths", },
    { id: 4, name: "Ram", },
    { id: 5, name: "Sam", },
];
schoolAStudentIDs = [1, 3, 4];
schoolBStudentIDs = [2, 5];
/*
function printNames(IDs) {
    // console.log(IDs)
    let istudentIDIterator = 0;
    while (istudentIDIterator < IDs.length) {
       //  console.log(IDs[i]);//
        const studentID = IDs[istudentIDIterator];
        //console.log(studentID);
        istudentIDIterator++;
        let studentObjectIterator = 0;
        while (studentObjectIterator < students.length) {
            //console.log(students[studentObjectIterator]);
            const student = students[studentObjectIterator];
            if(studentID===student.id){
                console.log(student.name)
            }
           // else{
                console.log("Failed")
            }//
            studentObjectIterator++;
        }
    }
}
printNames(schoolBStudentIDs); */
function getNames(IDs) {
    result=[];
    for (let studentIDIterator = 0; studentIDIterator < IDs.length; studentIDIterator++) {
        //console.log(IDs[studentObjectIterator]);
        const studentID = IDs[studentIDIterator];
        // console.log(studentID)
        for (let studentObjectIterator = 0; studentObjectIterator < students.length; studentObjectIterator++) {
            const student = students[studentObjectIterator];
            if (student.id === studentID) {
                result.push(student.name);
               // console.log(result);
                //console.log(student.name);

            }
        }
    }
    return result;
}
const studentNames=  getNames(schoolAStudentIDs);
console.log(studentNames)
