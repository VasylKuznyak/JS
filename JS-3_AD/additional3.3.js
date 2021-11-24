// 1. Створити пустий масив та :
// //     a. заповнити його 50 парними числами за допомоги циклу.
// let arrayRandom = [];
// for (let i = 0, j = 0; i < 50; i++, j++) {
//     if (i % 2 === 0 && i !== 0) {
//         arrayRandom[i] = j;
//     }
// }
// console.log(arrayRandom);

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arrayRandom = [];
// for (let i = 0, j = 1; i < 50; j = j + 2, i++) {
//     arrayRandom[i] = j;
// }
// console.log(arrayRandom);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arrayRandom = [];
// for (let i = 0; i < 20; i++) {
//     arrayRandom[i] = Math.floor(Math.random() * 100);
// }
// console.log(arrayRandom);

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let array = [];
// let arrayRandom = [];
// for (let i = 0; i < 20; i++) {
//     arrayRandom[i] = Math.floor(Math.random() * 732);
//     if (arrayRandom[i] > 8) {
//         array[i] = arrayRandom[i];
//     }
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемент
// let eachThirdNumberArray = [];
// for (let i = 3; i < 30; i += 3) {
//     eachThirdNumberArray[i] = i;
//     console.log(eachThirdNumberArray[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let eachThirdPairArray = [];
// for (let i = 3; i < 50; i+=3) {
//     if (i % 2 === 0) {
//         eachThirdPairArray[i] = i;
//         console.log(eachThirdPairArray[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let eachThirdPairArray = [];
// let eachThirdPairArrayNew = [];
// for (let i = 3, j = 0; i < 50; j++, i += 3) {
//     if (i % 2 === 0) {
//         eachThirdPairArray[i] = i;
//         eachThirdPairArrayNew[j] = eachThirdPairArray[i];
//         console.log(eachThirdPairArrayNew[j]);
//     }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let neighborPairArray = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < neighborPairArray.length; i++) {
//     if (neighborPairArray[i + 1] % 2 === 0) {
//         console.log(neighborPairArray[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let receiptArray = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < receiptArray.length; i++) {
//     sum = receiptArray[i] + sum;
// }
// let middleReceipt = sum / receiptArray.length;
// console.log(middleReceipt);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrayRandom = [];
// let arrayRandomNew = [];
// for (let i = 0; i < 20; i++) {
//     arrayRandom[i] = Math.floor(Math.random() * 100);
//     arrayRandomNew[i] = arrayRandom[i] * 5;
// }
// console.log(arrayRandom);
// console.log(arrayRandomNew);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// Пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let randomArray = ['cat', 80, 'dog', true, 56, false, 11];
// let randomArrayNew = [];
// for (let i = 0; i < randomArray.length; i++) {
//     let randomArrayElement = randomArray[i];
//     if (typeof randomArrayElement === "number") {
//         randomArrayNew[i] = randomArrayElement;
//         console.log(randomArrayNew[i]);
//     }
// }

// - Дано 2 масиви з рівною кількістю обєктів.                                      ????????????????????????????????????
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let allInformationAboutUser;
for (let usersWithIdElement of usersWithId) {
    for (let citiesWithIdElement of citiesWithId) {
        if (usersWithId.id === citiesWithIdElement.user_id) {
            usersWithIdElement.address = citiesWithIdElement;
        }
        allInformationAboutUser = usersWithId.concat(citiesWithIdElement);
        console.log(allInformationAboutUser);
    }
}

// Зєднати в один обєкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей обєкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let lettersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <= lettersArray.length; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         lettersArray[i] = i;
//         console.log(lettersArray[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let lettersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let lettersArrayNew = [];
// for (let i = 0; i <= lettersArray.length; i++) {
//     lettersArrayNew[i] = i;
// }
// console.log(lettersArrayNew);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let lettersArray = ['a', 'b', 'c'];
// for (let i = 0; i < lettersArray.length; i++) {
//     document.write(`${lettersArray[i]}`);
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let lettersArray = ['a', 'b', 'c'];
// i = 0;
// while (i<lettersArray.length) {
//     document.write(`${lettersArray[i]}`);
//     i++;
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let lettersArray = ['a', 'b', 'c'];
// for (const letter of lettersArray) {
//     document.write(`${letter}`)
// }