const userData = {
    name: '',
    surname: '',
    birthdate: '',
    sex: '',
    city: 'Kharkiv',
    address: '',
    language: []
}

document.querySelector('#name').addEventListener('input', (e) => {
    userData.name = e.target.value;
});

document.querySelector('#surname').addEventListener('input', (e) => {
    userData.surname = e.target.value;
});

document.querySelector('#birthdate').addEventListener('input', (e) => {
    userData.birthdate = e.target.value;
});

document.getElementsByName('sex').forEach(radio => {
    radio.addEventListener('click', (e) => {
        if(radio.checked){
            userData.sex = radio.value;
        }
    })
});

document.querySelector('#cities').addEventListener('change', (e) => {
    for(let i = 0; i < e.target.options.length; i++){
        if(e.target.options[i].selected) userData.city = e.target.options[i].value;
    }
});

document.querySelector('#address').addEventListener('input', (e) => {
   userData.address = e.target.value;
});

let lanChecks = document.querySelectorAll('input[name = "language"]');

document.querySelector('#save-btn').addEventListener('click', (e) => {

    lanChecks.forEach(checkbox => {
        if(checkbox.checked) userData.language.push(checkbox.value);
    })
    console.log(userData.language);
})