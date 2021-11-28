// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Weasley'
// let n3 = 'Hermione__Granger'
// _____________________________
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Weasley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Weasley';
let n3 = 'Hermione__Granger';
let nameFixer = (name) => name.replace('..', ' ').replace('---', ' ').replace('__', ' ');

console.log(nameFixer(n1));
console.log(nameFixer(n2));
console.log(nameFixer(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArray = [];
let numberGenerate = (size, limit) => {
    for (let i = 0; i < size; i++) {
        randomArray.push(Math.round(Math.random() * limit));
    }
    return randomArray;
};
console.log(numberGenerate(10, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortArray = numberGenerate();
let sort = sortArray.sort((a, b) => a - b);
console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filterArray = numberGenerate();
let filter = filterArray.filter(value => value % 2 === 0);
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// За допомоги map та колбеку перетворити всі обєкти в масиві на стрінгові.
let mapArray = numberGenerate();
let map = mapArray.map(value => value.toString());
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11, 21, 3];
let sortNums = (array, direction) => {
    if (direction === '+') {
        return array.sort((a, b) => a - b);
    } else if (direction === '-') {
        return array.sort((a, b) => b - a);
    }
};
console.log(sortNums(nums, '+'));
console.log(sortNums(nums, '-'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortCoursesArray = (array) => array.sort((a, b) => b.monthDuration-a.monthDuration);
console.log(sortCoursesArray(coursesAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let fiveMonthCourses = (array) => array.filter(a => a.monthDuration >= 5);
console.log(fiveMonthCourses(coursesAndDurationArray));
