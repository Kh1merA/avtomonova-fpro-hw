function generateKey(count, characters){
    let key = '';

    while(count > 0){
        let index = Math.round(Math.random() * (characters.length - 1));
        key += characters[index];
        count--;
    }

    return key;
}

const keyOut = document.getElementsByClassName("key-output")[0];

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
keyOut.innerHTML = key;