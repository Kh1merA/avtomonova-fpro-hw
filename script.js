let num1 = prompt('Input first number', '2');
let num2 = prompt('Input second number', '2');
let action = prompt('Input operation(add, sub, mult, div)', 'add');

num1 = Number(num1);
num2 = Number(num2);

if(String(num1) == "NaN" || String(num2) == "NaN"){
    alert("Wrong input");
} else {
    switch(action) {
        case "add":
            alert(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "sub":
            alert(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "mult":
            alert(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case "div":
            if(num2 == 0){
                alert ("Action is not possible");
                break;
            }
            alert(`${num1} / ${num2} = ${num1 / num2}`);
            break;
    }
}