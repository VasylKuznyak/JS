// 1. Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// Зробити кнопку до кожного поста. При кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        posts.forEach(post => {
                let divPost = document.createElement('div');
                divPost.classList.add('divPost');
                let userID = document.createElement('h1');
                userID.innerText = post.userId;
                let id = document.createElement('id');
                id.innerText = post.id;
                let title = document.createElement('h2');
                title.innerText = post.title;
                let body = document.createElement('p');
                body.innerText = post.body;
                let divPostButton = document.createElement('button');
                divPostButton.innerText = 'SHOW COMMENT';

                divPostButton.onclick = function () {
                    let comment = document.createElement('div');
                    comment.innerText = post;
                    console.log(comment);
                }
                divPost.append(userID, id, title, body, divPostButton);
                document.body.appendChild(divPost);
            }
        );
    });


