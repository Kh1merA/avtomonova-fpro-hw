let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//Task 1
let sum = arr.filter(item=> item > 0).reduce((accumulator, item) => accumulator + item, 0);
let counter = arr.filter(item=> item > 0).length;

console.log(`Сума позитивних елементів: ${sum}`);
console.log(`Кількість позитивних елементів: ${counter}`);

//Task 2
let min_element = arr[0];
let ind_min_element = 0;
arr.forEach((item) => {
    if(item < min_element){
        min_element = item;
        ind_min_element = arr.indexOf(item);
    }
});

console.log(`Мінімальний елемент масиву: ${min_element}`);
console.log(`Індекс мінімального елементу масиву: ${ind_min_element}`);

//Task 3
let max_element = arr[0];
let ind_max_element = 0;
arr.forEach((item) => {
    if(item > max_element){
        max_element = item;
        ind_max_element = arr.indexOf(item);
    }
});

console.log(`Мксимальний елемент масиву: ${max_element}`);
console.log(`Індекс максимального елементу масиву: ${ind_max_element}`);

//Task 4
let counter_negative_elements = arr.filter(item=> item < 0).length;

console.log(`Кількість негативних елементів: ${counter_negative_elements}`);

//Task 5
let counter_odd_positive = arr.filter((item) => {
    return item > 0 && item % 2 !== 0;
}).length;

console.log(`Кількість непарних позитивних елементів: ${counter_odd_positive}`);

//Task 6
let counter_even_positive = arr.filter((item) => {
    return item > 0 && item % 2 === 0;
}).length;

console.log(`Кількість парних позитивних елементів: ${counter_even_positive}`);

//Task 7
let sum_even_positive = arr.filter((item) => {
    return item > 0 && item % 2 === 0;
}).reduce((accumulator, item) => {
    return accumulator + item
}, 0);

console.log(`Сума парних позитивних елементів: ${sum_even_positive}`);

//Task 8
let sum_odd_positive = arr.filter((item) => {
    return item > 0 && item % 2 !== 0;
}).reduce((accumulator, item) => {
    return accumulator + item
}, 0);

console.log(`Сума непарних позитивних елементів: ${sum_odd_positive}`);

//Task 9
let multiply_positive = arr.filter(item => item > 0).reduce((accumulator, item) => {
    return accumulator * item
}, 1);

console.log(`Добуток позитивних елементів: ${multiply_positive}`);

//Task 10
//У третьому завданні вже було знайдено найбільший елемент, тому було використано його
let newArr = arr.map((item) => {
    return (item !== max_element) ? 0 : item;
});

console.log(newArr);