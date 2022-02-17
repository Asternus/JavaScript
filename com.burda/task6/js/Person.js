class Person {
    constructor(name, age, pet) {
        this.name = name;
        this.age = age;
        this.pet = pet;
    }

    info() {
        console.log("name " + this.name + ", age " + this.age + ", pet " + this.pet)
    }
}

var alex = new Person("Alex", 25, "Cat");
console.log(alex.name);
alex.info();