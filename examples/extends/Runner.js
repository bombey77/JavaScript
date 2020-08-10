let parent = {
    "name": 'Roman',
    "sureName": 'Moto',
    "age": 33
}

let child = {
    "sibling": true,
    __proto__: parent
}

let brother = {
    "sex": 'male',
    __proto__: child
}

console.log(child.name); //Roman
console.log(parent.sibling); //undefined
console.log(brother.sibling); //true


