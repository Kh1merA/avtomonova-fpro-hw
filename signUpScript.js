//Show user info after sign up
function userInfoFunc(userData){
    document.querySelector('#userName').textContent = userData.name;
    document.querySelector('#userSurname').textContent = userData.surname;
    document.querySelector('#userBirthDate').textContent = userData.birthdate;
    document.querySelector('#userSex').textContent = userData.sex;
    document.querySelector('#userCity').textContent = userData.city;
    document.querySelector('#userAddress').textContent = userData.address;
    userData.language.forEach(lan => {
        document.querySelector('#userLanguages').textContent += `${lan} `;
    })
}

//Object to contain user data
const userData = {
    name: '',
    surname: '',
    birthdate: '',
    sex: '',
    city: 'Kharkiv',
    address: '',
    language: []
}

//Read username
document.querySelector('#name').addEventListener('input', (e) => {
    userData.name = e.target.value;
});

//Read user surname
document.querySelector('#surname').addEventListener('input', (e) => {
    userData.surname = e.target.value;
});

//Read user birthdate
document.querySelector('#birthdate').addEventListener('input', (e) => {
    userData.birthdate = e.target.value;
});

//Read user sex
document.getElementsByName('sex').forEach(radio => {
    radio.addEventListener('click', (e) => {
        if(radio.checked){
            userData.sex = radio.value;
        }
    })
});

//Read user city
document.querySelector('#cities').addEventListener('change', (e) => {
    for(let i = 0; i < e.target.options.length; i++){
        if(e.target.options[i].selected) userData.city = e.target.options[i].value;
    }
});

//Read user address
document.querySelector('#address').addEventListener('input', (e) => {
   userData.address = e.target.value;
});

//Read user languages
let lanChecks = document.querySelectorAll('input[name = "language"]');

document.querySelector('#save-btn').addEventListener('click', (e) => {
    userData.language = [];

    lanChecks.forEach(checkbox => {
        if(checkbox.checked) userData.language.push(checkbox.value);
    })
});

//Show error and success message event
document.querySelector('#form').addEventListener('submit', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    let errorMarker = false;
    let regForm = document.getElementsByClassName('regForm')[0];
    let userInfo = document.getElementsByClassName('user-info-table')[0];
    let successMessage = document.getElementsByClassName('success')[0];
    let errorMessage = document.getElementsByClassName('error')[0];
    for(let key in userData){
        if(userData[key] === '' || userData[key].length === 0){
            errorMessage.style.display = 'block';
            errorMessage.textContent = `Please, input your ${key}`;
            errorMarker = true;
        }
    }
    if(!errorMarker){
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
        userInfoFunc(userData);
        userInfo.style.display = 'flex';
        regForm.style.display = 'none';
    }
    e.preventDefault();
});

