class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];
    addResident(human){
        if(human instanceof Human){
            this.residents.push(human);
            console.log("Resident was added");
        }
        else{
            console.log("Something went wrong");
        }
    }
}

class House {
    apartments = [];
    constructor(max_amount) {
        this.max_amount = max_amount;
    }
    addApartment(apartment){
        if(this.apartments.length >= this.max_amount){
            console.log("No place for new apartment");
        }
        else if(apartment instanceof Apartment){
            this.apartments.push(apartment);
            console.log("Apartment was added");
        }
        else{
            console.log("Something went wrong");
        }
    }
}

let human1 = new Human("Luffy", "Male");
let human2 = new Human("Zoro", "Male");
let human3 = "Nami";
let human4 = new Human("Sanji", "Male");
let human5 = new Human("Robin", "Female");

console.log(human1);
console.log(human2);
console.log(human4);
console.log(human5);

let apartment1 = new Apartment();
apartment1.addResident(human1);
apartment1.addResident(human2);
apartment1.addResident(human3);
let apartment2 = new Apartment();
apartment2.addResident(human4);
apartment2.addResident(human5);
let apartment3 = [];

let house1 = new House(5);
house1.addApartment(apartment1);
house1.addApartment(apartment2);
house1.addApartment(apartment2);
house1.addApartment(apartment3);
house1.addApartment(apartment2);
house1.addApartment(apartment2);
house1.addApartment(apartment2);

console.log(house1);




