// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let text = document.getElementById('text');
text.onclick = function () {
    text.style.display = 'none';
};

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'Hide Me';
button.style.width = '100px';
button.style.height = '50px';
button.onclick = function () {
    button.style.display = 'none';
};

// -  людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача.
let ageForm = document.createElement('form');
ageForm.setAttribute('id', 'firstForm');
ageForm.style.display = 'flex';
document.body.appendChild(ageForm);
let btnInput = document.createElement('button');
btnInput.setAttribute('id', 'firstButton');
btnInput.innerText = 'Accept';
ageForm.appendChild(btnInput);
btnInput.style.width = '100px';
btnInput.style.height = '50px';
let input = document.createElement('input');
input.setAttribute('id', 'firstInput');
ageForm.appendChild(input);
input.innerText = 'Enter your age';
input.style.width = '300px';
document.forms.firstForm.onsubmit = function (eventObject) {
    eventObject.preventDefault();
};
document.getElementById('firstButton').onclick = function () {
    let userAge = document.getElementById('firstInput').value;
    if (userAge < 18) {
        console.log('Sorry, you are younger than 18');
    } else if (userAge >= 18) {
        console.log('Welcome');
    } else if (typeof userAge !== "number") {
        console.log('Please, Enter your age.');
    }
};


// - Создайте меню, которое раскрывается/сворачивается при клике
let wrap = document.createElement('div');
wrap.classList.add('menu');
document.body.appendChild(wrap);
let title = document.createElement('h1');
title.innerText = 'Press Me to Hide';
wrap.appendChild(title);
let list = document.createElement('ul');
wrap.appendChild(list);
for (let i = 0; i < 20; i++) {
    let li = document.createElement('li');
    li.innerText = 'Text-Text';
    list.append(li);
}
let menuElement = document.querySelector('.menu');
menuElement.onclick = function () {
    menuElement.classList.toggle('hide');
};


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolor sit amet'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

//     let target = document.getElementsByClassName('target')[0];
// target.ondblclick = function () {
//     console.log('dblclick');
// };
// target.onmousedown = function () {
//     console.log('onmousedown');
// };
// target.onmouseup = function () {
//     console.log('onmouseup');
// };
// target.onmouseover = function () {
//     console.log('onmouseover');
// };
// target.onmouseleave = function () {
//     console.log('onmouseleave');
// };
// target.onmousemove = function (eventObject) {
//     this.style.backgroundColor = `rgb(${eventObject.clientX},${eventObject.clientY},${eventObject.clientX}`;
//     console.log(eventObject);
// };
// document.onkeypress = function (e) {
//     console.log(e.key);
// };
// document.forms.f1.onsubmit = function (e) {
//     e.preventDefault()
// };
