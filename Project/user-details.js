let userDetails = JSON.parse(localStorage.getItem('info'));
let divDetail = document.createElement('div');
divDetail.classList.add('details')

divDetail.innerHTML = `
<p>id: ${userDetails.id}</p>
<h1>Name: ${userDetails.name}</h1>
<h2>User Name: ${userDetails.username}</h2>
<h3>Email: ${userDetails.email}</h3>
<p>Adress: ${userDetails.address.street}, ${userDetails.address.suite},
${userDetails.address.city}</p>
<h5>Zip Code: ${userDetails.address.zipcode}, Geolocation: ${userDetails.address.geo.lat}, ${userDetails.address.geo.lng}</h5>
<h5> Phone: ${userDetails.phone}. Website: ${userDetails.website}</h5>
<h4> Company: ${userDetails.company.name}. Phrase: ${userDetails.company.name}</h4>
<p>bs: ${userDetails.company.bs}</p>`;

let detailButton = document.createElement('button');
detailButton.innerText = 'Posts of current user';

let usersPosts = document.createElement('wrapper');
usersPosts.classList.add('wrap');

detailButton.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts => {
            posts.forEach(post => {
                if (post.userId === userDetails.id) {
                    let element = document.createElement('div');
                    element.classList.add('element');
                    usersPosts.appendChild(element);

                    let list = document.createElement('div');
                    list.innerText = post.title;
                    detailButton.onclick = function () {
                        usersPosts.classList.toggle('hide');
                    };

                    let commentButton = document.createElement('button');
                    commentButton.classList.add('commentBtn');
                    commentButton.innerText = 'Go for post details'
                    commentButton.onclick = function () {
                        location.href = 'post-details.html';
                        localStorage.setItem('post', JSON.stringify(post));
                    };

                    element.append(list, commentButton);
                    document.body.appendChild(usersPosts);
                }
            });
        });
};

divDetail.appendChild(detailButton);
document.body.appendChild(divDetail);
