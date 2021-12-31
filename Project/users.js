let wrapper = document.createElement('wrapper');
wrapper.classList.add('wrap');
document.body.appendChild(wrapper);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        users.forEach(user => {
            let userDiv = document.createElement('div');
            userDiv.classList.add('half')
            userDiv.innerHTML = `<h1>${user.id}</h1><h2>${user.name}`;
            let userButton = document.createElement('button');
            userButton.innerText = 'Details';
            userButton.onclick = function () {
                location.href = 'user-details.html';
                localStorage.setItem('info', JSON.stringify(user));
            };
            userDiv.appendChild(userButton);
            wrapper.appendChild(userDiv);
        });
    });
