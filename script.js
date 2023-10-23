class SuperMath {
    constructor() {
        this.operations = ['+', '-', '*', '/', '%'];
    }

    check(obj){
        const {X, Y, znak} = obj;
        if(this.operations.includes(znak)){
            let isRight = confirm(`Ви дійсно хочете виконати операцію: ${znak}`);
            if(!isRight){
                this.input(obj);
            }
            else{
                console.log(`Результат операції ${X} ${znak} ${Y} = ${this.doOperation(X, Y, znak)}`);
            }
        }
        else{
            console.log('Введено недійсний оператор. Використовуйте один з наступних: +, -, *, /, %');
            this.znak = prompt('Введіть інший оператор (+, -, *, /, %)', obj.znak);
        }
    }

    doOperation(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '*':
                return X * Y;
            case '/':
                return X / Y;
            case '%':
                return X % Y;
        }
    }

    input(obj) {
        obj.znak = prompt('Введіть інший оператор (+, -, *, /, %)', obj.znak);
        obj.X = +prompt('Введіть нове перше число', obj.X);
        obj.Y = +prompt('Введіть нове друге число', obj.Y);
        this.check(obj);
    }
}

const obj = { X: 12, Y: 3, znak: '/' };
const mathCalculator = new SuperMath();
mathCalculator.check(obj);