// - створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)
// function num1(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// }
//
// num1(223, 426, 312);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function num2(d, e, f) {
//     if (d > e && d > f) {
//         console.log(d);
//     }else if (e > d && e > f) {
//         console.log(e);
//     }else if (f > d && f > e) {
//         console.log(f);
//     }
// }
//
// num2(423, 523, 231);

// - створити функцію яка повертає найбільше число з масиву
// function arrayNum(nums) {
//     let numMax = 0;
//     for (const num of nums) {
//         if (num > numMax) {
//             numMax = num;
//         }
//     }
//     return numMax;
// }
//
//
// console.log(arrayNum(arrayNums = [426, 253, 584, 423, 532, 2102]));

// - створити функцію яка повертає найменше число з масиву
// function arrayNum(nums) {
//     let numMin = nums[0];
//     for (const num of nums) {
//         if (num < numMin) {
//             numMin = num;
//         }
//     }
//     return numMin;
// }
//
// console.log(arrayNum(arrayNums = [426, 253, 584, 423, 532, 2102]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function arraySum(nums) {
//     let sum = 0;
//     for (const numElement of nums) {
//         sum = sum + numElement;
//     }
//     return sum;
// }
//
// console.log(arraySum(array = [10, 40, 60]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function middleNum() {
//     let middleNumber = 0;
//     for (const numElement of nums) {
//         middleNumber = numElement + middleNumber;
//     }
//     return middleNumber/nums.length;
// }
//
// console.log(middleNum(nums = [10, 46, 50, 79, 64, 46]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше (Math використовувати заборонено);
// function anyNumbers() {
//     let numberReturnMin = numbers[0];
//     let numberReturnMax = numbers[0];
//     for (const num of numbers) {
//         if (num < numberReturnMin) {
//             numberReturnMax = num;
//
//         } else if (num > numberReturnMax) {
//             numberReturnMax = num;
//         }
//     }
//     console.log(numberReturnMin, numberReturnMax);
//     return numberReturnMin;
// }
//
// anyNumbers(numbers = [156, 466, 482, 688, 531]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function generateArray(length) {
//     let randomArray = [];
//     for (let i = 0; i < length; i++) {
//         randomArray[i] = (Math.round(Math.random() * 100));
//     }
//     return randomArray;
// }
//
// console.log(generateArray(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomArray(length, limit) {
//     let arrayNumbers = [];
//     for (let i = 0; i < length; i++) {
//         arrayNumbers[i] = (Math.floor(Math.random() * limit));
//     }
//     return arrayNumbers;
// }
//
// console.log(randomArray(20, 40));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function array(arrayOld) {
    let arrayNew = [];
    for (let i = arrayOld.length - 1, k = 0; i >= 0; k++, i--) {
        arrayNew[k] = arrayOld[i];

    }
    return arrayNew;
}

console.log(array([10, 20, 30, 40, 50,]));

