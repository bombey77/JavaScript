class User {

    constructor(name, sureName, age) {
        this.name = name;
        this.sureName = sureName;
        this.age = age;
    }

    printUserData() {
        console.log(this.name);
        console.log(this.sureName);
        console.log(this.age);
    }

    doWork() {
        console.log('User is doing some work...');
    }
}

