
function removeElement(arr, num){
    arr.splice(arr.indexOf(num), 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
removeElement(arr,  5);

let outElem = document.getElementsByClassName("result-massive")[0];

arr.forEach((item) => {
    outElem.innerHTML += `${item} `;
});

