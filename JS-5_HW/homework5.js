// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let sRectangle = (a, b) => a * b;
// console.log(sRectangle(10, 30));

// - створити функцію яка обчислює та повертає площу кола
// let sCircle = (r) => Math.PI * Math.pow(r, 2);
// console.log(sCircle(20));

// - створити функцію яка обчислює та повертає площу циліндру
// let sCylinder = (r, h) => Math.PI * Math.pow(r, 2) * h;
// console.log(sCylinder(20, 60));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let fnArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// };
// fnArray(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraphFn = (text)=> document.write(`<p>${text}</p>`);
// paragraphFn('Lorem ipsum dolor sit amet.');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listFunction = (text) => {
//     document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// listFunction('Lorem ipsum dolor sit amet.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let listFunctionLimit = (text, limit) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listFunctionLimit('Lorem ipsum dolor sit amet.', 3);

// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список
// let primitiveArray = [12, true, 5, true, 'apple', 8, false, 'orange'];
// let listCreator = (array) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// };
// listCreator(primitiveArray);

// - створити функцію яка приймає масив обєктів з наступними полями id, name, age, та виводить їх в документ. Для кожного обєкту окремий блок.
// let usersArray = [
//     {id: 1, name: 'Vasyl', age: 25},
//     {id: 2, name: 'Zorana', age: 20},
//     {id: 3, name: 'Olga', age: 20},
//     {id: 4, name: 'Oleh', age: 20},
//     {id: 5, name: 'Sofia', age: 19},
// ];
// let usersArrayFunction = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age} years old.</div>`);
//     }
// };
// usersArrayFunction(usersArray);
