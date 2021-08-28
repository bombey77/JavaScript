// simple promise with return value example

const promise = new Promise((resovle, reject) => {
    let returnValue = true;
    resovle(returnValue);
});

promise.then(data => {
    console.log(data);
});
