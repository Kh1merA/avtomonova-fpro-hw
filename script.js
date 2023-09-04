
//task 1
function average(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(String(typeof(arr[i])) === 'number') sum += arr[i];
    }
    return sum;
}

const arr = [ 4, '4', "kdfjdfkj", 'dfdf', [4], {name: 'Alex'}, 5, 6];

console.log(average(arr));

//task 2

// function doMath(x, znak, y){
//     switch(znak){
//         case '+': return x + y;
//         case '-': return x - y;
//         case '*': return x * y;
//         case '/': return x / y;
//         case '%': return x % y;
//         case '^': return Math.pow(x, y);
//         default: return 'This operation doesn\'t exist';
//     }
// }
//
// let firstNumber = +prompt('Input first number', '3');
// while(isNaN(firstNumber)) firstNumber = +prompt('Please, input correct first number', '3');
// let secondNumber = +prompt('Input second number', '6');
// while(isNaN(secondNumber)) secondNumber = +prompt('Please, input correct second number', '3');
// let operation = prompt('Input operation to do', '+');
//
// while((operation === '/' || operation === '%') && secondNumber === 0){
//     secondNumber = +prompt('Please, input other second number', '6');
//     while(isNaN(secondNumber)) secondNumber = +prompt('Please, input correct second number', '3');
// }
//
// console.log(doMath(firstNumber, operation, secondNumber));

//task 3

// function createATwoDimensionalArr(){
//     let resultArr = [];
//     let mainArrLength = +prompt('Input main array length', '3');
//     let subArrLength = +prompt ('Input sub arrays length', '3');
//     for(let i = 0; i < mainArrLength; i++){
//         let subArray = [];
//         for(let j = 0; j < subArrLength; j++){
//             subArray[j] = prompt('Input element', '1');
//         }
//         resultArr[i] = subArray;
//     }
//     return resultArr;
// }
//
// let newArr = createATwoDimensionalArr();
//
// for(let i of newArr){
//     let str = '';
//     for(let j of i){
//         str += j + ' ';
//     }
//     console.log(str);
// }


//task 4

// function removeChar(str, charsArr){
//     charsArr.forEach((item => str = str.replace(new RegExp(item, 'g'), '')));
//     console.log(str);
// }
//
// removeChar("Paradise city", ['a', 'e']);





