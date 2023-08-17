let num1 = prompt('Input first number', '2');
let num2 = prompt('Input second number', '2');



if(String(+num1) == "NaN" || String(+num2) == "NaN"){
    alert("Wrong Input");
} else {
    alert(`${num1} + ${num2} = ${+num1 + +num2}\n${num1} - ${num2} = ${num1 - num2}\n${num1} * ${num2} = ${+num1 * +num2}\n${num1} / ${num2} = ${+num1 / +num2}`);
}