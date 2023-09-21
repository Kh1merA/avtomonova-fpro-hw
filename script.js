function showResult(){
    document.querySelector('#result-string').innerHTML = "Result: " +
        document.querySelector('#first-string').value + " " +
        document.querySelector('#second-string').value + " " +
        document.querySelector('#third-string').value;
}

const inputs = document.getElementsByClassName('input-string');

for(let item of inputs){
    item.addEventListener('input', () => {
        showResult();
    })
}

document.querySelector('#number-button').addEventListener('click', () => {
    let num = document.querySelector('#input-number').value;

    let result = '';

    for(let i = 0; i < 5; i++){
        result += `${num % 10} `;
        num = Math.floor(num/10);
    }

    document.querySelector('#result-number').innerHTML = `Result: ${result.split(' ').reverse().join(' ')}`;
})