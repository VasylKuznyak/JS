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
//         console.log(document.forms.first.textOne.value);
//         console.log(document.forms.first.textTwo.value);
//         console.log(document.forms.second.textOne.value);
//         console.log(document.forms.second.textTwo.value);
// });

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const firstInput = document.createElement('input');
// firstInput.setAttribute('name', 'line');
// const secondInput = document.createElement('input');
// secondInput.setAttribute('name', 'amount');
// const thirdInput = document.createElement('input');
// thirdInput.setAttribute('name', 'text');
// let button = document.createElement('button');
// button.style.height = '15px';
// button.style.width = '65px';
// document.body.append(firstInput, secondInput, thirdInput, button);
//
// button.addEventListener('click', function () {
//     let firstValue = firstInput.value;
//     let secondValue = secondInput.value;
//     let thirdValue = thirdInput.value;
//
//     function createTable(first, second, third) {
//         let table = document.createElement('table');
//         document.body.appendChild(table);
//         table.style.border = '1px solid black';
//         for (let i = 0, j = 0; i < firstValue, j < secondValue; j++, i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '.5px solid red';
//             let td = document.createElement('td');
//             td.style.border = '.5px solid green';
//             td.innerText = `${third}`;
//             table.appendChild(tr);
//             table.appendChild(tr);
//             tr.appendChild(td);
//         }
//     }
//
//     createTable(firstValue, secondValue, thirdValue);
// });


// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let words = ['дурак', 'придурок', 'козел', 'свиня'];
let textInput = document.createElement('input');
textInput.setAttribute('type', 'text');
let button = document.createElement('button');
document.body.append(textInput, button);

button.addEventListener('click', function () {
    words.forEach(word => {
        if (textInput.value === word) {
            alert('Не цензурне слово')
        }
    });
});

// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
