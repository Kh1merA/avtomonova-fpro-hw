
class Student {
    visits = [];
    constructor(name, surname, birthYear, marks) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.marks = marks;
    }

    getAge(){
        let date = new Date();
        console.log(date.getFullYear() - this.birthYear);
    }

    getAverageMark() {
        let result = this.marks.reduce((previous, current) => {
            return previous + current;
        }, 0);
        return result/this.marks.length;
    }

    present(){
        if(!(this.visits.length >= 25)) {
            this.visits.push(true);
        }
    }

    absent(){
        if(!(this.visits.length >= 25)) {
            this.visits.push(false);
        }
    }

    summary(){
        let visitCount = this.visits.filter(item => {
            return item === true;
        });
        let visitStatus = visitCount.length/this.visits.length;
        if(this.getAverageMark() >= 90 && visitStatus >= 0.9){
            console.log('Молодець!');
        }
        else if (this.getAverageMark() < 90 && visitStatus < 0.9){
            console.log('Редиска!');
        }
        else {
            console.log('Добре, але можна краще!');
        }
    }

}

let student1 = new Student('Luffy', 'Monky D.', '2006', [100, 90, 89, 95, 75, 100, 100]);
let student2 = new Student('Zoro', 'Roronoa', '2004', [70, 85, 90, 70, 75, 65, 80]);
let student3 = new Student('Tony', 'Chopper', '2005', [99, 90, 89, 95, 75, 97, 100]);
let student4 = new Student('Sanji', 'Vinsmoke', '2004', [60, 70, 65, 70, 75, 86, 70]);

student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student4.present();
student4.present();
student4.present();
student4.absent();
student4.absent();

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(`${student1.name}`);
student1.getAge();
console.log(student1.getAverageMark());
student1.summary();

console.log(`${student2.name}`);
student2.getAge();
console.log(student2.getAverageMark());
student2.summary();

console.log(`${student3.name}`);
student3.getAge();
console.log(student3.getAverageMark());
student3.summary();

console.log(`${student4.name}`);
student4.getAge();
console.log(student4.getAverageMark());
student4.summary();