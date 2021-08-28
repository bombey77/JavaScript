// async await promise with return value example

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
    try {
        console.log('firstPromise started');
        await firstPromise(3);
        console.log('firstPromise');
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}
runPromise().then((result) => {
    console.log(result);
});
console.log('end');

// OUTPUT
// start
// firstPromise started
// hard work
// end
// time out
// firstPromise
// true

