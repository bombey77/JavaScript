class Student extends User {

    constructor(name, sureName, age, course) {
        super(name, sureName, age);
        this.course = course;
    }

    doWork() {
        super.doWork();//call method doWork for User class
        console.log('Student is doing some work...');
    }
}
