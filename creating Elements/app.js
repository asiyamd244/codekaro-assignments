rev = () => {

    let title = document.getElementById('title');
    let btn = document.getElementById('btn');

    title.innerText = 'You re good to move advanced js';
    btn.style.backgroundColor = "blueviolet";

}


function roll() {
    let dice = document.getElementById('dice');
    let random = Math.floor(Math.random() * 6) + 1;
    let audio = document.getElementById('dice-audio');
    audio.play();
    dice.classList.add('spin');
    setTimeout(function () {
        dice.classList.remove('spin')
        dice.innerText = random;
    }, 1000);

}
function createbox() {

    let boxContainer = document.getElementById('boxContainer')
    let div = document.createElement('div');
    div.classList.add('box');
    boxContainer.appendChild(div);

}


let users = [];
let usercontainer = document.createElement("usercontainer");
let alert = document.getElementById('alert');
function renderusers() {
    usersContainer.innerHTML = "";
    users.forEach((user) => {
        let div = document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p');

        div.classList.add('user');
        usercontainer.appendChild(div);
        name.innerText = user.name;
        email.innerText = user.email;
        div.appendChild(name)
        div.appendChild(email)
    })
}
function doesUserExsit(email) {
    let user = users.filter((user) => {
        return user.email == email
    })
    return user.length > 0 ? true : false;
}
function hideAlert() {
    setTimeout(() => {
        alert.classList.remove('success', 'danger')
    }, 2000)
}

function addUser() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let user = {
        name: name.value,
        email: email.value,
    }
    let userExsit = doesUserExsit(email.value);
    if (userExsit == false) {
        users.push(user);
        alert.classList.add('success');
        alert.innerText = 'User added successfully!'
        hideAlert()
    }
    else {
        alert.classList.add('danger');
        alert.innerText = 'Email already exists!'
        hideAlert()
    }
    renderUsers()
}

