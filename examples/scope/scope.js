let global = 777;//global variable
globalVariable = "Can be found anywhere";

function printGlobal() {
    console.log(global);
}

printGlobal();

function printLocal() {
    var x = 10;
    console.log(x);
}

printLocal();

// console.log(x); can't read local variable - x

console.log(globalVariable);

function letExample() {
    {
        let xx = 12;//let - visible only in the scope, var - visible as global variable
    }
    console.log(xx);
}

const c = 12;// const can't be modified and should be initialized
const obj = {
    "name": 'Roman',
    "sureName": 'Moto'
}
obj.name = 'NewName';//const object can be modified
console.log(obj.name);

let newObj = {
    "m1": 'm1',
    "m2": 'm2'
}

// obj = newObj; - const object can't be changed


// 777
// 10
// Can be found anywhere
