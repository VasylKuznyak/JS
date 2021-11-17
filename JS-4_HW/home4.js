// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle(a, b) {
//     return (a * b);
// }
//
// let res = rectangle(20, 40);
// console.log(res);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(r, p) {
//     return (p * r * r);
// }
//
// let res = circle(40, 3.14);
// console.log(res);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(h, p, r) {
//     return (h * p * r * r);
// }
//
// let res = cylinder(10, 3.14, 5);
// console.log(res);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let numbers = [10, 20, 30, 40, 50];
//
// function num(numbers) {
//     for (let number of numbers) {
//         console.log(number);
//     }
// }
//
// num(numbers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text1) {
//         document.write(`<p>`);
//         document.write(arguments[0]);
//         document.write(`</p>`);
// }
//
// paragraph('Lorem ipsum dolor sit amet.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text1, text2, text3) {
//         document.write(`<ul>`);
//         document.write(`<li>${text2}</li>`);
//         document.write(`<li>${text2}</li>`);
//         document.write(`<li>${text2}</li>`);
//         document.write(`</ul>`);
// }
//
// list('hello', 'good', 'night');

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(text, count) {
//         document.write(`<ul>`);
//         for (let i = 0; i < count; i++) {
//                 document.write(`<li>${text}</li>`);
//         }
//         document.write(`</ul>`);
// }
//
// list('hello',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [12, 64, true, 'cat', 'dog', false, 59];
//
// function arr(text) {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${text[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arr(array);

// - створити функцію яка приймає масив обєктів з наступними полями id, name, age, та виводить їх в документ. Для кожного обєкту окремий блок.
// let fistUser = [{id: 1, name: 'olga', age: 26,}, {id: 2, name: 'oleg', age: 26,}, {id: 3, name: 'viktoria', age: 26,}];
//
// function userDocument(array) {
//     for (const arr of array) {
//         document.write(`<div>`);
//         document.write(`<div>${arr.id},${arr.name},${arr.age}</div>`);
//         document.write(`</div>`);
//     }
// }
//
// userDocument(fistUser);
