let postDetails = JSON.parse(localStorage.getItem('post'));
let divDetail = document.createElement('div');
divDetail.classList.add('detail');
divDetail.innerHTML = `
    <p>User id: ${postDetails.userId}</p>
    <h2>Id: ${postDetails.id}</h2>
    <h1>Title: ${postDetails.title}</h1>
    <h3>Body: ${postDetails.body}</h3>
`;
document.body.appendChild(divDetail);

let h1 = document.createElement('h1');
h1.innerText = 'Comments:';
document.body.appendChild(h1);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        comments.forEach(comment => {
            if (comment.id === postDetails.id) {
                let divComment = document.createElement('div');
                divComment.classList.add('comment');
                divComment.innerHTML = `
                   <p>${comment.postId}</p>
                   <h2>${comment.id}</h2>
                   <h1>${comment.name}</h1>
                   <h2>${comment.email}</h2>
                   <h3>${comment.body}</h3>`;
                document.body.appendChild(divComment);
            }
        });
    });
