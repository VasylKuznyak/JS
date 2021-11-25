// - Знайти та вивести довижину настипних стрінгових значень
// let firstString = 'hello world';
// let secondString = 'lorem ipsum';
// let thirdString = 'javascript is cool';
// console.log(firstString.length);
// console.log(secondString.length);
// console.log(thirdString.length);

// - Перевести до великого регістру наступні стрінгові значення
// let firstString = 'hello world';
// let secondString = 'lorem ipsum';
// let thirdString = 'javascript is cool';

// let upperCase1 = firstString.toUpperCase();
// console.log(upperCase1);
// let upperCase2 = secondString.toUpperCase();
// console.log(upperCase2);
// let upperCase3 = thirdString.toUpperCase();
// console.log(upperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
// let firstString = 'HELLO WORLD';
// let secondString = 'LOREM IPSUM';
// let thirdString = 'JAVASCRIPT IS COOL';
// let lowerCase1 = firstString.toLowerCase();
// console.log(lowerCase1);
// let lowerCase2 = secondString.toLowerCase();
// console.log(lowerCase2);
// let lowerCase3 = thirdString.toLowerCase();
// console.log(lowerCase3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let spaceDelete = str.trim();
// console.log(spaceDelete.length);

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let array = str.split(' ');
// console.log(array);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let deleteCharacters = (str, length) => str.substring(0, length);
// console.log(deleteCharacters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insertDash = (str) => {
//     return str.replaceAll(' ', '-').toUpperCase()
// };
// document.write(insertDash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = "java";
// let firstSymbolUpperCase = (str) => str[0].toUpperCase()+str.slice(1);
// console.log(firstSymbolUpperCase(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// };
// console.log(capitalize('каждый охотник желает знать'));
