// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < b && c < a) {
//         console.log(c);
//     }
// };
// minNumber(10, 20, 30);
// minNumber(20, 30, 10);
// minNumber(30, 10, 20);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     }else if (b > a && b > c) {
//         console.log(b);
//     }else if (c > a && c > b) {
//         console.log(c);
//     }
// };
// maxNumber(10, 20, 30);
// maxNumber(20, 30, 10);
// maxNumber(30, 10, 20);

// - створити функцію яка повертає найбільше число з масиву
// let numbersArray = ([54, 48, 32, 67, 83, 91, 18, 75]);
// let maxNumOfArray = (array) => {
//     let maxNum = 0;
//     for (let arrayElement of array) {
//         if (maxNum < arrayElement) {
//             maxNum = arrayElement;
//         }
//     }
//     return maxNum;
// };
//
// console.log(maxNumOfArray(numbersArray));

// - створити функцію яка повертає найменьше число з масиву
// let numbersArray = ([54, 48, 32, 67, 83, 91, 18, 75]);
// let minNumOfArray = (array) => {
//     let minNum = array[0];
//     for (let arrayElement of array) {
//         if (minNum > arrayElement) {
//             minNum = arrayElement;
//         }
//     }
//     return minNum;
// };
// console.log(minNumOfArray(numbersArray));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbersArray = ([54, 48, 32, 67, 83, 91, 18, 75]);
// let sumValueOfArray = (array) => {
//     let sumValue = 0;
//     for (let arrayElement of array) {
//         sumValue = sumValue + arrayElement;
//     }
//     return sumValue;
// };
// console.log(sumValueOfArray(numbersArray));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbersArray = ([54, 48, 32, 67, 83, 91, 18, 75]);
// let averageNumOfArray = (array) => {
//     let averageNum = 0;
//     for (let arrayElement of array) {
//         averageNum = averageNum + arrayElement;
//     }
//     return averageNum / array.length;
// };
// console.log(averageNumOfArray(numbersArray));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numbersArray = ([54, 48, 32, 67, 83, 91, 18, 75]);
// let minNumberReturn = (array) => {
//     let minNumber = array[0];
//     let maxNumber = array[0];
//     for (let arrayElement of array) {
//         if (minNumber > arrayElement) {
//             minNumber = arrayElement;
//         }
//         if (maxNumber < arrayElement) {
//             maxNumber = arrayElement;
//         }
//     }
//     console.log(maxNumber);
//     return minNumber;
// };
// console.log(minNumberReturn(numbersArray));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let emptyArray = [];
// let randomGenerate = (array, amount) => {
//     for (let i = 0; i < amount; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//
// };
// randomGenerate(emptyArray, 20);
// console.log(emptyArray);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// let emptyArray = [];
// let randomNumsFiller = (array, amount, limit) => {
//     for (let i = 0; i < amount; i++) {
//         emptyArray[i] = Math.round(Math.random() * limit);
//     }
// };
// randomNumsFiller(emptyArray, 20, 50);
// console.log(emptyArray);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let numbersArray = [1, 2, 3];
// let numbersArrayNew = [];
// let numsReverseArray = (array) => {
//     for (let i = 0, r = array.length; i < array.length; r--, i++) {
//         numbersArrayNew[i] = r;
//     }
// };
// numsReverseArray(numbersArray);
// console.log(numbersArrayNew);
// console.log(numbersArray);