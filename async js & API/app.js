// console.log('task1');
// console.log('task2');
// console.log('task3');
// setTimeout(() => {
//     console.log('task4');
// }, 5000)

// console.log('task5');



//promises 


// const demoPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('the task is completed!')
//     }, 5000)
// })
// demoPromise.then((data) => {
//     console.log(data)
// }).catch((data) => {
//     console.log(data)
// })


fetch("https://dummyjson.com/quotes").then((data) => {
    //console.log(data)
    return data.json();

}).then((data) => {
    console.log(data)
})
async function fetchQuotes() {
    let quotes = await fetch("https://dummyjson.com/quotes");
    let author = await data.json()
    let random = Math.floor(Math.random() * quotes.length)
    let quotes = quotes[random];
    //console.log(quote)
    document.getElementById('quote').innerText = quotes.text;
    document.getElementById('author').innerText = quotes.author;
}

fetchQuotes()