var arr = ["One", "Two", "Three"];//first way how to init array

arr.push(1,2,3);//array is dynamic and can contain different types (Java is different)
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var newArr = new Array("One", "Two", "Three");//second way how to init array

for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
}

// One
// Two
// Three
// 1
// 2
// 3
// One
// Two
// Three
