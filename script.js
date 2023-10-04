class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}\n Age: ${this.age}\n`);
    }
}

class Car {
    constructor(mark, model, year, number) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
            console.log("Owner was added");
        } else {
            console.log("Owner is too young");
        }
    }

    displayInfo() {
        console.log(`Mark: ${this.mark}\n Model: ${this.model}\n Year: ${this.year}\n Number: ${this.number}\n`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.displayInfo();
        } else {
            console.log("No owner.");
        }
    }
}

const human1 = new Human("Ace", 20);
const human2 = new Human("Luffy", 17);
const human3 = new Human("Marko", 45);

const car1 = new Car("Volkswagen", "Polo", 2011, "AX8344CI");
const car2 = new Car("Skoda", "Octavia", 2021, "AX0251OA");
const car3 = new Car("Skoda", "Kodiaq", 2020, "AX4532XA");

car1.assignOwner(human1);
car2.assignOwner(human2);
car3.assignOwner(human3);

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
