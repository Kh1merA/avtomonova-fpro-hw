document.querySelector('#time-button').addEventListener('click', () => {
    let hoursAmount = +document.querySelector('#time-input').value;
    document.querySelector('#result-time').innerHTML = `Result: ${3600 * hoursAmount}`;
})

