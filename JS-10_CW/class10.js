// - створити 2 форми по 2 інпути в кожній. Створити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки).
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let firstForm = document.createElement('form');
// firstForm.setAttribute('name', 'first');
// document.body.append(firstForm);
// const firstInput1 = document.createElement('input');
// firstInput1.setAttribute('name', 'textOne');
// const secondInput1 = document.createElement('input');
// secondInput1.setAttribute('name', 'textTwo');
// firstForm.append(firstInput1, secondInput1);
//
// let secondForm = document.createElement('form');
// secondForm.setAttribute('name', 'second');
// document.body.append(secondForm);
// const firstInput2 = document.createElement('input');
// firstInput2.setAttribute('name', 'textOne');
// const secondInput2 = document.createElement('input');
// secondInput2.setAttribute('name', 'textTwo');
// secondForm.append(firstInput2, secondInput2);
//
// let buttonForForms = document.createElement('button');
// buttonForForms.innerText = 'Press Me';
// buttonForForms.style.width = '80px';
// buttonForForms.style.height = '40px';
// document.body.appendChild(buttonForForms);
//
// buttonForForms.addEventListener('click', function () {
//     console.log(document.forms.first.textOne.value);
//     console.log(document.forms.first.textTwo.value);
//     console.log(document.forms.second.textOne.value);
//     console.log(document.forms.second.textTwo.value);
// });

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let form = document.createElement("form");
// form.setAttribute('name', 'createTable');
// form.classList.add('createTable');
// const firstInput = document.createElement('input');
// const secondInput = document.createElement('input');
// const thirdInput = document.createElement('input');
// let button = document.createElement('button');
// button.style.height = '15px';
// button.style.width = '65px';
// document.body.appendChild(form);
// form.append(firstInput, secondInput, thirdInput, button);
//
// let formTable = document.forms['createTable'];
// formTable.onsubmit = function (objectEvent) {
//     objectEvent.preventDefault();
//     let firstValue = +firstInput.value;
//     let secondValue = +secondInput.value;
//     let thirdValue = thirdInput.value;
//     console.log(firstValue, secondValue, thirdValue);
//
//     let table = document.createElement('table');
//     table.style.border = '1px solid black';
//
//     for (let i = 0; i < firstValue; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < secondValue; j++) {
//             let td = document.createElement('td');
//             td.style.border = '.5px solid green';
//             td.innerText = thirdValue;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }

// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let words = ['дурак', 'придурок', 'козел', 'свиня'];
// let textInput = document.createElement('input');
// textInput.setAttribute('type', 'text');
// let wordButton = document.createElement('button');
// document.body.append(textInput, wordButton);
//
// wordButton.addEventListener('click', function () {
//     words.forEach(word => {
//         if (textInput.value === word) {
//             alert('Не цензурне слово')
//         }
//     });
// });

// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let textInput2 = document.createElement('input');
// textInput2.setAttribute('type', 'text');
// let wordButton2 = document.createElement('button');
// document.body.append(textInput2, wordButton2);
//
// wordButton2.addEventListener('click', function () {
//     words.forEach(word => {
//         if (textInput.value.includes(word)) {
//             alert('Погане слово');
//         }
//     });
// });
