// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен обєкт свій блок з конопкою "додати до улюблених" при натисканні на яку обєкт
// потрапляє до масиву favorites улюблених обраних обєктів в локальному сховищі.
// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних на попередньому етапі.

users.forEach(user => {
    let div = document.createElement('div');
    div.innerText = `${user.name} - ${user.age} = ${user.status}`
    let button = document.createElement('button');
    button.innerText = 'Додати до улюблених';
    button.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(`${user.name}`);
        localStorage.setItem('favorites', JSON.stringify(favorites));

    };
    div.appendChild(button);
    document.body.appendChild(div);
});
