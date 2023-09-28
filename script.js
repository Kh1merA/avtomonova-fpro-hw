//Task 1

let numberString = '';
for(let i = 20; i <= 30; i += 0.5){
    numberString += i + ' ';
}
let firstResult = document.createElement('p');
firstResult.innerHTML = numberString;
document.querySelector('#first').append(firstResult);

//Task 2

for(let i = 10; i <= 100; i += 10){
    let row = document.createElement('p');
    row.innerHTML = `${i}$ = ${i * 27} гривень`;
    document.querySelector('#second').append(row);
}

//Task 3

document.querySelector('#third-input').addEventListener('input', () => {
    let numThird = +document.querySelector('#third-input').value;
    let resultRow = document.createElement('p');
    document.querySelector('#third').innerHTML = ' ';
    for(let i = 1; i < 100 && i*i <= numThird; i++){
        resultRow.innerHTML += i + ' ';
    }
    document.querySelector('#third').append(resultRow);
})

//Task 4

document.querySelector('#fourth-input').addEventListener('input', () => {
    let numFourth = +document.querySelector('#fourth-input').value;
    let resultRow = document.createElement('p');
    if(numFourth <= 1) resultRow.innerHTML = 'This number is NOT prime';
    else resultRow.innerHTML = 'This number is prime';
    document.querySelector('#fourth').innerHTML = '';
    for(let i = 2; i < numFourth; i++){
        if(numFourth % i === 0) {
            resultRow.innerHTML = 'This number is NOT prime';
            break;
        }

    }
    document.querySelector('#fourth').append(resultRow);
})

//Task 5

document.querySelector('#fifth-input').addEventListener('input', () => {
    let numFifth = +document.querySelector('#fifth-input').value;
    let resultRow = document.createElement('p');
    resultRow.innerHTML = 'Its impossible';
    document.querySelector('#fifth').innerHTML = '';
    for(let i = 0; Math.pow(3, i) <= numFifth; i++){
        if(Math.pow(3, i) === numFifth) {
            resultRow.innerHTML = `3 ^ ${i} == ${numFifth}`;
            break;
        }
    }
    document.querySelector('#fifth').append(resultRow);
})
