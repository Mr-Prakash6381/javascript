function createHelloWrold(){
    return function(){
        return "Hello Wrold";
    }
}
const f=createHelloWrold();
console.log(f());