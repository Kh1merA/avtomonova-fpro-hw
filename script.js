let average = 0;
const output = document.getElementsByClassName('average')[0];

for(let i = 0; i < 3; i++){
    let number = +prompt('Input number', '3');
    while(isNaN(number)){
        number = +prompt('Input number', '3');
    }
    average += number;
}

output.innerHTML = `${average/3}`;

