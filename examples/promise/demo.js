// simple promise example
const time = 1000;

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
firstPromise(3).then(() => {
    console.log('firstPromise');
});
console.log('test 2');

// OUTPUT
// start
// hard work
// test 2
// time out
// firstPromise
