

class Human {

    constructor() {
        this.gender = "male"
    }

    printMyName() {
        console.log(this.gender)
    }
}






class Person extends Human {

    constructor() {
        super();
        this.gender = "Female";
        this.name = "Swathi";
    }
}

Person p = new Person();
