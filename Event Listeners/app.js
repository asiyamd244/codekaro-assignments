

//let btn = document.getElementById('btn');
// btn.addEventListener('click', (event) => {
//     console.log(event.target.innerText + 'was clicked')
// })

// let btns = document.querySelectorAll('button');
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         let btn = e.target;

//         console.log(btn.innerText + 'clicked')
//         btn.innerText = 'clicked';
//         btn.setAttribute('disabled', true)
//     })

// })

// let alert = document.querySelector('.alert');
// let demo = document.querySelector('.demo');
// demo.addEventListener('mouseover', () => {
//     alert.innerText = 'cursor in demo box';
// })
// demo.addEventListener('mouseout', () => {
//     alert.innerText = 'cursor out demo box';

// })
// let inputs = document.querySelectorAll('input');
// inputs.forEach((input) => {
//     input.addEventListener('change', () => {
//         console.log(input.value);
//     })
// });
// let input = document.querySelector('input');
// input.addEventListener('keyup', () => {
//     console.log(input.value)
// })
// let loader = document.querySelector('#loader');
// loader.classList.remove('hidden');
// loader.classList.add('page-loader');
// window.addEventListener("load", () => {
//     loader.classList.remove('page-loader');
//     loader.classList.add('hidden');
// })
let btn = document.querySelector('.help');
window.addEventListener('scroll', () => {
    console.log(window.scrollY)
})