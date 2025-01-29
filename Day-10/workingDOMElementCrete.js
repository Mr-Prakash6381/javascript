/*
const body = document.body;
const h1 = document.createElement('h1');
const div = document.createElement('div');
const p = document.createElement('p');
const p1 = document.createElement('p');
/*h1.innerText='Welcome';
//div.innerText = 'Welcome';
p.innerText='Test'
p1.innerText='Test1'
h1.append(div);
div.append(p);
div.append(p1);
console.log({ h1 });
body.append(h1);
*/
const body = document.body;
const h1 = document.createElement('h1');
h1.innerHTML = 'Welcome ? ';
h1.className = 'heading bold';
console.log({ h1 })
body.append(h1);
//---------
/*
h1.classList.add('heading');
h1.classList.add('bold');
h1.classList=['heading','bold'];
*/
//----------
const userName = document.createElement('input');
userName.type = 'email';
userName.name = 'Email';
userName.placeholder = 'Email';
body.append(userName);


const button = document.createElement('button');
button.innerText = 'Submit';
button.onclick = () => {
    console.log(userName.value)
    console.log(userName.validity)
}

body.append(button)
