Array.prototype.customForEach = function (callback) {
    
    for (let i = 0; i < this.length; i++) {
        let currentObj=this[i]
        callback(currentObj);

    }

}

const marks = [
    { subject: 'Maths', score: 70 },
    { subject: 'Computer Science', score: 50 },
    { subject: 'Tamil', score: 80 }
]

let total = 0;
marks.customForEach(calculateTotal)
function calculateTotal(subject) {
    console.log(subject);
}
/*
function calculateTotal(element,index,allElements){

    total=total+element.score;
}
marks.forEach(calculateTotal);
console.log(total)
*/