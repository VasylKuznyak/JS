// 1. Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// Зробити кнопку до кожного поста. При кліку на яку виводяться в окремий блок всі коментарі поточного поста
let wrap = document.createElement('div');
wrap.classList.add('flex')
document.body.appendChild(wrap);
let leftPart = document.createElement('div');
leftPart.classList.add('left');
wrap.appendChild(leftPart);
const rightPart = document.createElement('div');
wrap.appendChild(rightPart);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        posts.forEach(post => {
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            let postUserID = document.createElement('h1');
            postUserID.innerText = post.userId;
            let postId = document.createElement('h3');
            postId.innerText = post.id;
            let postTitle = document.createElement('h2');
            postTitle.innerText = post.title;
            let postBody = document.createElement('p');
            postBody.innerText = post.body;
            let divPostButton = document.createElement('button');
            divPostButton.innerText = 'SHOW COMMENT';

            divPostButton.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(value => value.json())
                    .then(comment => {
                        comment.forEach(comment => {
                            if (comment.postId === post.userId) {
                                let divComment = document.createElement('div');
                                divComment.classList.add('comment');
                                let commentUserID = document.createElement('h1');
                                commentUserID.innerText = comment.postId;
                                let commentId = document.createElement('h3');
                                commentId.innerText = comment.id;
                                let commentName = document.createElement('h2');
                                commentName.innerText = comment.name;
                                let commentEmail = document.createElement('h2');
                                commentEmail.innerText = comment.email;
                                let commentBody = document.createElement('p');
                                commentBody.innerText = comment.body;
                                divComment.append(commentUserID, commentId, commentName, commentEmail, commentBody);
                                rightPart.appendChild(divComment);
                            }
                        });
                    });
            };
            divPost.append(postUserID, postId, postTitle, postBody, divPostButton);
            leftPart.appendChild(divPost);
        });
    });
