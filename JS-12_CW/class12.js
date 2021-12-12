// 1. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// Зробити кнопку до кожного поста. При кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        value.forEach(value => {
            let divPost = document.createElement('div');
            divPost.classList.add('divPost');
            let userID = document.createElement('h1');
            userID.innerText = value.userId;
            let id = document.createElement('id');
            id.innerText = value.id;
            let title = document.createElement('h2');
            title.innerText = value.title;
            let body = document.createElement('p');
            body.innerText = value.body;
            let divPostButton = document.createElement('button');
            divPostButton.innerText = 'SHOW';
            divPost.append(userID, id, title, body, divPostButton);
            document.body.appendChild(divPost);

            divPostButton.onclick = function () {
                let details = document.createElement('div');

            };
        });
    });
