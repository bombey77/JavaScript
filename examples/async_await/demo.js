// simple delay function
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms));
}

function myPromise () {
    console.log('1');
    return delay(3000)
        .then(() => fetch('https://jsonplaceholder.typicode.com/todos'))
        .then(response => response.json());
}
myPromise().then(data => {
    console.log('2');
    console.log(data);
});


async function myAsync() {
    console.log('1');
    await delay(3000);
    console.log('2');
    let result = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log('3');
    let json = await result.json();
    console.log('4');
    console.log(json);
    // 1 2 3 4 json result...
}
myAsync();




