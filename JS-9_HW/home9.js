// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.backgroundColor = 'purple';
div.style.color = 'white';
div.style.fontSize = '40px';
div.innerText = 'How are you?'
document.body.appendChild(div);
let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);

// - Є масив:
// ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let navArray = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.getElementsByClassName('menu')[0];
for (let element of navArray) {
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray1.forEach(element => {
    const div = document.createElement('div');
    let text = '';
    for (let key in element) {
        text += `${element[key]}`;
    }
    div.innerText = text;
    document.body.appendChild(div);
});

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray2.forEach(element => {
    let divContainer = document.createElement('div');
    divContainer.classList.add('item');
    let title = document.createElement('h1');
    title.classList.add('heading');
    let paragraph = document.createElement('p');
    paragraph.classList.add('description');
    title.innerText = element.title;
    paragraph.innerText = element.monthDuration;
    divContainer.append(title, paragraph);
    document.body.appendChild(divContainer);
});
