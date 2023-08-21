//Task 1
let result_str = '10';
let i = 11;
do{
    result_str += `, ${i}`;
    i++;
}while(i <= 20);
alert(result_str);

//Task 2
// let i = 10;
// do{
//   console.log(i*i);
//   i++;
// }while(i <= 20);

//Task 3
// console.log('Multiplication table by 7');
// for(let i = 1; i <= 9; i++){
//     console.log(`7 * ${i} = ${7 * i}`);
// }

//Task 4
// let sum = 0;
// for(let i = 1; i <= 15; i++){
//     sum += i;
// }
// console.log(sum);

//Task 5
// let multi = 1;
// for(let i = 15; i <= 35; i++){
//     multi *= i;
// }
// console.log(multi);

//Task 6
// let sum = 0;
// for(let i = 1; i <= 500; i++){
//     sum += i;
// }
// console.log(sum/500);

//Task 7
// let sum = 0;
// for(let i = 30; i <= 80; i+=2){
//     sum += i;
// }
// console.log(sum);

//Task 8
// for(let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

//Task 9, 10, 11
// let num = +prompt('Input number', '10');
//
// while(isNaN(num) || num <= 0){
//     num = +prompt('Please, input a correct number', '10');
// }
//
// console.log('Усі дільники введеного числа:');
//
// for(let i = 1; i <= num; i++){
//     if(num % i === 0) console.log(i);
// }
//
// let counter = 0;
// let sum = 0;
//
// for(let i = 2; i <= num; i+=2){
//     if(num % i === 0){
//         counter++;
//         sum += i;
//     }
// }
//
// console.log(`Кількість парних дільників: ${counter}`);
// console.log(`Сума парних дільників: ${sum}`);

//Task 12
// for(let i = 1; i <= 10; i++){
//     console.log(`Multiplication table by ${i}`);
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
