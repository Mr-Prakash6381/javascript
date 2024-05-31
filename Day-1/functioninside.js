const object={
    name:"prakash",age:25;
    method:()=>{
        console.log("I am Method");
    }
}
console.log(object);
console.log(object.name);
object.method();

var age=25;
function info(){
    console.log(this.age);
    console.log(this);
}
window.info();
