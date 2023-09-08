let inputElement = document.getElementsByClassName('input-info')[0];
let newElem = document.createElement('div');
newElem.style.width = '380px';
newElem.style.height = '571px';
newElem.style.backgroundImage = 'url("img/landscape.jpg")';
newElem.style.backgroundRepeat = 'no-repeat';
inputElement.setAttribute('placeholder', 'Нажми на меня');
inputElement.setAttribute('readonly', true);

let mainElem = document.getElementsByClassName('wrapper')[0];

inputElement.addEventListener('focus', () => {
    mainElem.appendChild(newElem);
});

inputElement.addEventListener('focusout', () => {
    mainElem.removeChild(newElem);
})