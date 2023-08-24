//функція виводу масиву у консоль
function printArr(arr){
    arr.forEach((item) => {
        console.log(item);
    });
}

let arrLength = +prompt('Input array length', '3');

let userArr = [];

for(let i = 0; i < arrLength; i++){
    userArr.push(prompt('Input new element', '1'));
}

printArr(userArr);
console.log('/--------------------------------------/');

userArr.sort((a, b) => a - b);

printArr(userArr);
console.log('/--------------------------------------/');

userArr.splice(1, 3); //оскільки другий елемент масиву матиме індекс 1

printArr(userArr);
console.log('/--------------------------------------/');



