// async await promise with try/catch example

const time = 1000;

// simple promise
function firstPromise(count) {
    return new Promise((resolve, reject) => {
        hardWork();
        setTimeout(() => {
            if (count > 5) {
                throw new Error('count is too big');
            }
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
    try {
        console.log('firstPromise started');
        await firstPromise(7);
        console.log('firstPromise');
    } catch (err) {
        console.log(err);
    }
}

runPromise();
console.log('end');

// OUTPUT
// start
// firstPromise started
// hard work
// end
// throw new Error('count is too big');
