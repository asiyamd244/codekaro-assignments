// localStorage.setItem('name', 'yash');
// localStorage.setItem('name', 'naveen');

// let nameInput = document.querySelector('input');
// let btn = document.querySelector('button');
// let form = document.querySelector('#WelcomeForm');
// let nameSpan = document.querySelector('#name')
// btn.addEventListener('click', () => {
//     let name = nameInput.value;
//     localStorage.setItem('name', name);
//     checkForm();

// })
// function checkForm() {
//     let userExists = 'name' in localStorage;

//     if (userExists) {
//         form.classList.add('hidden');

//         nameSpan.innerText = localStorage.getItem('name');
//     }
// }
// checkForm();



// let user = { name: 'Asiya', email: 'asiya @gmail.com' }
// //console.log(user);
// localStorage.setItem('user', JSON.stringify(user));
// let userFormStorage = JSON.parse(localStorage.getItem('user'))


// console.log(userFormStorage)






//SessionStorage



// sessionStorage.setItem('name', 'codekaro');
// let a = sessionStorage.getItem('name');
// console.log(a);

//counter app

let incrementBtn = document.querySelector('#increment');
let decrementBtn = document.querySelector('#decrement');
let counterDiv = document.querySelector('#counter');


incrementBtn.addEventListener("click", () => {
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counter = counter + 1;
    sessionStorage.setItem('counter', counter);
    counterDiv.innerText = counter;
    updateCounter()

})

decrementBtn.addEventListener("click", () => {
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counter = counter - 1;
    sessionStorage.setItem('counter', counter);
    counterDiv.innerText = counter;
    updateCounter()

})

function updateCounter() {
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counterDiv.innerText = counter;
}
updateCounter();



//console.log(localStorage)

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     console.log(key, value)
// }



//template literals

let name = 'Asiya';
let email = 'asiya@gmail.com';

console.log(`The name of the user is ${name}. The email is ${email}`)