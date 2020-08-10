class User {

    constructor(name, sureName) {
        this.name = name;
        this.sureName = sureName;
    }

    static getMobilePhone() {
        return +345678905675;
    }
}

console.log(User.getMobilePhone());//345678905675
