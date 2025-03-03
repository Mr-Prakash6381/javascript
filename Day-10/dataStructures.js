//----------Array Data Strucure-----------
let name='Anto1';
let items=Array.from(name);
console.log(items)//console.log(items[0]);
items.push(1);
console.log(items);
items.push(2);
items.pop(items);
console.log(items);
console.log(items.length)
console.log(items[0]);
console.log(items.length-1);
console.log(Math.round(items.length/2));
//----------Object Data Strucure--------
let person={
    name:'Anto',
    gender:'male',
    age:19,
    counter:'Indan',
   /* getName(){
        console.log(this.name);

    }
        */
       getName:function(){
        console.log(this.name);
        console.log(this.age);
       }
}
console.log(person);
person.getName();
console.log(person['counter']);
delete person.name;
console.log(person)

//--------Map Data Strucure-------
let value=new Map();
value.set('name','Babu');
value.set('name','Babu1');
value.set('firstName','Babu');
value.set('secondName','Babu');
console.log(value)
console.log(value.get('firstName'));
value.delete('name');
console.log(value);
value.has('firstName');
console.log(value)
console.log(value.values())
console.log(value.keys());
//----------Set Data Strucure------
let setValue=new Set();
setValue.add(1);
setValue.add(2);
setValue.add(3);
setValue.add(1);
setValue.delete(1)
setValue.clear()
setValue.has
console.log(setValue);
