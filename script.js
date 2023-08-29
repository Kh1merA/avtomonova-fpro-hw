
let outElem = document.getElementsByClassName("result-massive")[0];

function removeElement(arr, num){
    if(arr.indexOf(num) === -1){
        outElem.innerHTML = `Такого числа немає у масиві <br>`;
    }
    else {
        arr.splice(arr.indexOf(num), 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
removeElement(arr,  5);

outElem.innerHTML += `Результуючий масив: <br>`;

arr.forEach((item) => {
    outElem.innerHTML += `${item} `;
});