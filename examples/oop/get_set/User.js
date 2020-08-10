class User {

    set setName(name) {
        this._name = name.trim().toLowerCase();
        //_name -> используется для указания важности переменной и ее значения
        //например для сохранения в БД данные должны передаваться в корректном виде
    }

    get getName() {
        return this._name;
    }
}

let usr = new User();
usr.setName = '   Roman   ';
console.log(usr.getName);
