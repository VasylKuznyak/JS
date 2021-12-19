let postDetails = JSON.parse(localStorage.getItem('post'));
let divDetail = document.createElement('div');
divDetail.innerHTML = `
<p>User id: ${postDetails.userId}</p>
<h2>Id: ${postDetails.id}</h2>
<h1>Title: ${postDetails.title}</h1>
<h3>Body: ${postDetails.body}</h3>
`;
document.body.appendChild(divDetail);

let commentTittle = document.createElement('div');
commentTittle.innerHTML = '<h1>Comments:</h1>';
document.body.appendChild(commentTittle);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        comments.forEach(comment => {
            if (comment.id === postDetails.id) {
                let divComment = document.createElement('div');
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
