const postIdInput = document.getElementById('postId');
const searchButton = document.getElementById('searchButton');
const postContainer = document.getElementById('postContainer');
const getCommentsButton = document.getElementById('getCommentsButton');
const commentsList = document.getElementById('commentsList');

//Search post
searchButton.addEventListener('click', () => {
    const postId = postIdInput.value;
    if (postId >= 1 && postId <= 100) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => {
                postContainer.innerHTML = `
                            <h2>${data.title}</h2>
                            <p>${data.body}</p>
                        `;
                getCommentsButton.style.display = 'block';
            })
            .catch(error => {
                console.error('Помилка:', error);
                postContainer.innerHTML = 'Пост не знайдено.';
                getCommentsButton.style.display = 'none';
            });
    } else {
        alert('ID поста повинен бути від 1 до 100');
    }
});

//Get and show comments
getCommentsButton.addEventListener('click', () => {
    const postId = postIdInput.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => {
            commentsList.innerHTML = '';
            data.forEach(comment => {
                const li = document.createElement('li');
                li.innerHTML = `<b>${comment.name}</b>: ${comment.body}`;
                commentsList.appendChild(li);
            });
            commentsList.style.display = 'block';
        })
        .catch(error => {
            console.error('Помилка при отриманні коментарів:', error);
            commentsList.innerHTML = 'Помилка при отриманні коментарів.';
            commentsList.style.display = 'none';
        });
});



