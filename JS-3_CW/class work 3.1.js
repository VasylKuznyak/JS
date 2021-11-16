// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] та:
//     1. перебрати його циклом while
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < numbers.length) {
//       console.log(numbers[i]);
//     i++;
// }

//     2. перебрати його циклом for
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

//     3. перебрати циклом while та вивести числа тільки з непарним індексом
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < numbers.length) {
//     if (i % 2 !== 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(numbers[i]);
//     }
// }

// 5. перебрати циклом while та вивести числа тільки парні значення
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести числа тільки парні значення
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// замінити кожне число кратне 3 на слово "okten"
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let number of numbers) {
//     if (number % 3 === 0) {
//         number = 'okten';
//     }
//     console.log(number);
// }

// 8. вивести масив в зворотньому порядку.
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     const number = numbers[i];
//     console.log(number);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.1 замінити кожне число кратне 3 на слово "okten"
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = 'okten';
//     }
//     console.log(numbers[i]);
// }

// 9.2 перебрати циклом for та вивести числа тільки парні значення
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// 9.3 перебрати циклом while та вивести числа тільки парні значення
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = numbers.length - 1;
// while (i >= 0) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i--;
// }

// 9.4 перебрати циклом for та вивести числа тільки з непарним індексом
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = numbers.length - 1; i > 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(numbers[i]);
//     }
// }

// // 9.5 перебрати циклом while та вивести числа тільки з непарним індексом
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = numbers.length - 1;
// while (i > 0) {
//     if (i % 2 !== 0) {
//         console.log(numbers[i]);
//     }
//     i--;
// }

// // 9.6 перебрати його циклом for
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }

// // 9.7 перебрати його циклом while
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = numbers.length - 1;
// while (i >= 0) {
//     console.log(numbers[i]);
//     i--;
// }
