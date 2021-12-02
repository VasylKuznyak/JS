// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let mainHeader = document.getElementById('main_header');
// mainHeader.classList.add('September-2021')
// console.log(mainHeader);

// b) робить ширини елементу ul 400px
// let width400 = document.getElementsByTagName('ul');
// for (const width400Element of width400) {
//     width400Element.style.width = '400px'
// }

// c) робить ширини всіх елементів з класом linkList шириною 50%
// let width50List = document.getElementsByClassName('linkList');
// for (const element of width50List) {
//     element.style.width = '50%';
// }
// console.log(width50List);

// d) отримує текст який зберігається в елементі з класом listElement2
function textFn(text) {
    let elementByClassName = document.getElementsByClassName('listElement2');
    elementByClassName.innerText = text;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liList = document.getElementsByTagName('li');
// for (const li of liList) {
//     li.style.backgroundColor = 'grey';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let aElementByTagName = document.getElementsByTagName('a');
// for (const a of aElementByTagName) {
//     a.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aElements = document.getElementsByTagName('a');
// for (const aElement of aElements) {
//     if (aElement.innerText === 'link3') {
//         aElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elementsByTagA = document.getElementsByTagName('a');
// for (const a of elementsByTagA) {
//     a.classList.add(a.innerText);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let ColorChanger = document.getElementsByClassName('sub-header');
// for (const colorElement of ColorChanger) {
//     colorElement.style.backgroundColor = prompt('enter color');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment. Колір отримати з prompt()
// let ChangeColor = document.getElementsByClassName('sub-header');
// for (const ColorElement of ChangeColor) {
//     if (ColorElement.innerText === 'content 2 segment') {
//         ColorElement.style.backgroundColor = prompt('enter color');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний. Текст отримати з prompt()
let textChange = document.getElementsByClassName('content_1');
textChange.innerText = prompt('enter text');

// l) отримати елементи p та змінити їм padding на 20px
// let pElements = document.getElementsByTagName('p');
// for (const pElement of pElements) {
//     pElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let textGroup = document.getElementsByClassName('text2');
// for (const textElement of textGroup) {
//     textElement.innerText = 'sep-2021';
// }