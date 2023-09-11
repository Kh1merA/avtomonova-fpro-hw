let imgElem = document.querySelector('img');
let buttonElem = document.getElementsByClassName('random')[0];

buttonElem.addEventListener('click',() => {
    imgElem.src = `img/${Math.round(Math.random()*8 + 1)}.jpg`;
})
