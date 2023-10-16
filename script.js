class Hamburger{

    constructor(size) {
        if(size === 'BIG'){
            this.price = 100;
            this.calorie = 40;
        }
        else if(size === 'SMALL'){
            this.price = 50;
            this.calorie = 20;
        }
        else{
            console.log('Input right size(BIG or SMALL)');
        }
    }

    addStuffing(item){
        switch(item){
            case 'cheese':
                this.price += 10;
                this.calorie += 20;
                break;
            case 'salad':
                this.price += 20;
                this.calorie += 5;
                break;
            case 'potato':
                this.price += 15;
                this.calorie += 10;
        }
    }

    addTopping(item){
        switch(item){
            case 'sauce':
                this.price += 15;
                break;
            case 'mayo':
                this.price += 20;
                this.calorie += 5;
        }
    }

    calculateCalorie(){
        console.log(`Calorie content: ${this.calorie}`);
    }

    calculatePrice() {
        console.log(`Price: ${this.price}`);
    }
}

let hamburger1 = new Hamburger('SMALL');
let hamburger2 = new Hamburger('BIG');
let hamburger3 = new Hamburger('MEDIUM');

hamburger1.addTopping('sauce');
hamburger2.addTopping('mayo');
hamburger1.addStuffing('cheese');
hamburger2.addStuffing('potato');

console.log('Hamburger 1 Info: \n');
hamburger1.calculateCalorie();
hamburger1.calculatePrice();

console.log('Hamburger 2 Info: \n');
hamburger2.calculatePrice();
hamburger2.calculateCalorie();
