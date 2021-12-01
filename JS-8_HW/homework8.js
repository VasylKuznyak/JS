// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
document.getElementById('content').innerText;

// -- отримує текст з блоку з id "rules"
document.getElementById('rules').innerText;

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'Other text 1';

// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'Other text 2'

// -- змініть кожному елементу колір фону на червоний
let children_1 = document.body.children;
for (const child of children_1) {
    child.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій
let children_2 = document.body.children;
for (const child of children_2) {
    child.style.color = 'blue';
}

// -- Отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').className);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsByClassName = document.getElementsByClassName('fc_rules');
for (const element of elementsByClassName) {
    element.style.color = 'red';
}
