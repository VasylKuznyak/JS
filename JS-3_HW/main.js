// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array1 = [1, 2, 3, 4, 5];
// let array2 = ['one', 'two', 'three', 'four', 'five'];
// let array3 = [false, 2, 'three', true, 'five'];
// console.log(array1);
// console.log(array2);
// console.log(array3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 'I';
// array[1] = 'want';
// array[2] = 'to';
// array[3] = 'sleep';
// console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Animal</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Animal № ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Animal</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Animal № ${i}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`${numbers[i]}`);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let text = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',];
// for (let i = 0; i < text.length; i++) {
//     console.log(`${text[i]}`);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
// for (let i = 0; i < array.length; i++) {
//     console.log(`${array[i]}`);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [19, 20, 30, true, 'forty', 'sixty', 'seventy', 'eighty', false, 'ninety'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "boolean") {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [1, 2, 3, 'four', 'five', 'six', true, false, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = ['cat', 'elephant', 15, false, 'dog', 'chicken', 80, true, 'duck', 65];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//         console.log(array[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 46;
// array[1] = 'elephant';
// array[2] = 22;
// array[3] = true;
// array[4] = 'cat';
// array[5] = 68;
// array[6] = 'dog';
// array[7] = false;
// array[8] = 80;
// array[9] = 'snake';
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i ++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i = i + 2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
//