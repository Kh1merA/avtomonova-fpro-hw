//Create available smileys data
const smileShop = ['😆', '😅', '😃', '😈', '😉', '😂', '🤩', '🤑', '😬', '😔', '😵', '🥳', '😩', '😱', '👽'];

let addBlock = document.querySelector('#add-block');
//Show available smileys
function showAvailable() {
    smileShop.forEach((item) => {
        let smileElement = document.createElement('button');
        smileElement.textContent = item;
        smileElement.classList.add('smile-button');

        smileElement.addEventListener('click', () => {
            let newSmile = { smile: "", voteCount: 0};
            newSmile.smile = item;

            smileys.push(newSmile);

            smileContainer.innerHTML = '';
            voteContainer.innerHTML = '';
            buttonContainer.innerHTML = '';
            addBlock.style.display = "none";
            initialization();
        })

        addBlock.append(smileElement);
    })
}

//Create smileys data
const smileys = [
    {
        smile: "😆",
        voteCount: 0,
    },
    {
        smile: "😅",
        voteCount: 0,
    },
    {
        smile: "😃",
        voteCount: 0,
    },
    {
        smile: "😈",
        voteCount: 0,
    },
    {
        smile: "😉",
        voteCount: 0,
    }
];

//Get smile && vote && button containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');
let buttonContainer = document.querySelector('#button-container');

//Update vote scores
function updateVotes() {
    voteContainer.innerHTML = "";

    smileys.forEach((item) => {
        let voteElement = document.createElement('div');
        voteElement.textContent = item.voteCount;

        voteContainer.append(voteElement);
    })
}

//Show smileys elements
function showSmiles() {
    smileys.forEach((item) => {
        let smileElement = document.createElement('button');
        smileElement.textContent = item.smile;
        smileElement.classList.add('smile-button');

        smileElement.addEventListener('click', () => {
            item.voteCount++;
            updateVotes();
        })

        smileContainer.append(smileElement);
    })
}

//Show delete buttons
function showButtons(){
    smileys.forEach((item, index) => {
        let button = document.createElement('button');
        button.classList.add('button-style');
        button.textContent = 'Delete';

        button.addEventListener('click', () => {
            smileys.splice(index, 1);

            //Clear all elements
            smileContainer.innerHTML = '';
            voteContainer.innerHTML = '';
            buttonContainer.innerHTML = '';

            //Show them again
            initialization();
        })

        buttonContainer.append(button);
    })
}

//Initialization
function initialization(){
    showSmiles();
    updateVotes();
    showButtons();
}

initialization();


//Add button event
document.querySelector('#add-button-container').addEventListener('click', () => {
    addBlock.style.display = "grid";
    addBlock.innerHTML = '';
    showAvailable();
})
