// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ обєкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(posts => {
        let wrap = document.createElement('div');
        wrap.classList.add('flex');
        document.body.appendChild(wrap);
        posts.forEach(post => {
            let divPost = document.createElement('div');
            divPost.classList.add('divPost');
            let userId = document.createElement('h1');
            userId.innerHTML = post.userId;
            let id = document.createElement('h2');
            id.innerHTML = post.id;
            let title = document.createElement('h3');
            title.innerHTML = post.title;
            let body = document.createElement('p');
            body.innerHTML = post.body;
            wrap.appendChild(divPost);
            divPost.append(userId, id, title, body);
        });
    });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        value.forEach(comment => {
            let divComment = document.createElement('div');
            divComment.classList.add('divComment');
            let postId = document.createElement('h3');
            postId.innerText = `Post ID - ${comment.postId}`;
            let id = document.createElement('h1');
            let name = document.createElement('h2');
            name.innerText = `Name - ${comment.name}`;
            id.innerText = `ID - ${comment.id}`;
            let email = document.createElement('h4');
            email.innerText = `Email - ${comment.email}`;
            let body = document.createElement('p');
            body.innerText = comment.body;
            divComment.append(postId, id, name, email, body);
            document.body.appendChild(divComment);
        });
    });


