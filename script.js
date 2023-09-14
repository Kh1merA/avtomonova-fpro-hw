let leftArrow = document.getElementsByClassName('left-arrow')[0];
let rightArrow = document.getElementsByClassName('right-arrow')[0];
let imageBlock = document.getElementsByClassName('image')[0];

let imageCounter = 1;

leftArrow.addEventListener('click', () => {
    imageCounter--;
    imageBlock.src = `img/${imageCounter}.jpg`;
    rightArrow.style.visibility = 'visible';
    if(imageCounter <= 1) leftArrow.style.visibility = 'hidden';
});

rightArrow.addEventListener('click', () => {
    imageCounter++;
    imageBlock.src = `img/${imageCounter}.jpg`;
    leftArrow.style.visibility = 'visible';
    if(imageCounter >= 9) rightArrow.style.visibility = 'hidden';
});