// async await promise example

const time = 1000;

// simple promise
function firstPromise(count) {
    return new Promise((resolve, reject) => {
        hardWork();
        setTimeout(() => {
            console.log("time out");
            // promise doesn't return without call resolve method
            resolve();
        }, count * time);
    });
}

function hardWork() {
    console.log("hard work");
}

console.log("start")
async function runPromise() {
    console.log('firstPromise started');
    await firstPromise(3);
    console.log('firstPromise');
}
runPromise();
console.log('end');

// OUTPUT
// start
// firstPromise started
// hard work
// end
// time out
// firstPromise
