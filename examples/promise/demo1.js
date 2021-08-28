const time = 1000;

function firstPromise(count) {
    return new Promise((resolve, reject) => {
        hardWork();
        setTimeout(() => {
            console.log("time out1");
            // promise doesn't return without call resolve method
            resolve();
        }, count * time);
    });
}

function secondPromise(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("time out2");
            // promise doesn't return without call resolve method
            resolve();
        }, count * time);
    });
}

function hardWork() {
    console.log("hard work");
}

console.log("start")
firstPromise(3)
    .then(() => {
        console.log('firstPromise');
        return secondPromise(3);
    }).then(() => {
    console.log('secondPromise');
});
console.log('end');

// OUTPUT
// start
// hard work
// end
// time out1
// firstPromise
// time out2
// secondPromise

