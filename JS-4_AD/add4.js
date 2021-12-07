// - створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.
// function supplement(value1, value2) {
//     if (arguments.length === 1) {
//         return arguments;
//     } else return arguments[0] + arguments[1];
//
// }
//
// console.log(supplement('apple', 'pear'));

// - створити функцію яка приймає два масиви та складає значення елементів з однаковими індексами та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

// let array1 = [1, 2, 3, 4];
// let array2 = [2, 3, 4, 5];
// let array3 = [];
//
// function newArrayCreator(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         array3.push(arr1[i] + arr2[i]);
//     }
//     return array3;
// }
//
// newArrayCreator(array1, array2);
// console.log(array3);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Max', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let driverArray = [{name: 'Max', age: 13}, {model: 'Camry'}];
// let driverKeysArray = [];
// function keyGetter(array) {
//     for (const driver of array) {
//         for (const key in driver) {
//             driverKeysArray.push(key);
//         }
//     }
//     return driverKeysArray;
// }
// keyGetter(driverArray);
// console.log(driverKeysArray);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE: [{name: 'Max', age: 13}, {model: 'Camry'}]  ===> [ Max, 13, Camry ]
// let driverArray = [{name: 'Max', age: 13}, {model: 'Camry'}];
// let driverKeysArray = [];
// function keyGetter(array) {
//     for (const driver of array) {
//         for (const key in driver) {
//             driverKeysArray.push(driver[key]);
//         }
//     }
//     return driverKeysArray;
// }
// keyGetter(driverArray);
// console.log(driverKeysArray);