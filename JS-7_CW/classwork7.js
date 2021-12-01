// - Створити функцію конструктор яка дозволяє створювати обєкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, обєм двигуна. додати в обєкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає обєкт "водій" з довільним набором полів, і додає його в поточний обєкт car
function Car(model, producer, year, maxSpeed, engineVol) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVol = engineVol;
    this.drive = () => console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    this.drive();
    this.info = () => console.log(`
        Модель - ${this.model},
        Виробник - ${this.producer},
        Рік випуску - ${this.year},
        Виробник - ${this.maxSpeed},
        Обєм двигуна - ${this.engineVol}`);

    this.info();
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
    console.log(this.increaseMaxSpeed(30));
    this.changeYear = (newValue) => this.year = newValue;
    console.log(this.changeYear(2022));
    this.addDriver = (driver) => this.driver = driver;
    this.addDriver({name: 'Sofia', age: 20, experience: 3});
    console.log(this.driver);
}

console.log(new Car('Grand Cherokee', ' Jeep', 2021, 190, 3));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати обєкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// обєм двигуна. додати в обєкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає обєкт який "водій" з довільним набором полів, і додає його в поточний обєкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, engineVol) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVol = engineVol;
        this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        this.drive();
        this.info = () => console.log(`
        Модель автомобіля - ${this.model},
        Виготовилено фірмою - ${this.producer},
        Рік випуску - ${this.year},
        Максимальна швидкість - ${this.maxSpeed},
        Обєм двигуна - ${this.engineVol}`);
        this.info();
        this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
        console.log(this.increaseMaxSpeed(40));
        this.changeYear = (newValue) => this.year = newValue;
        console.log(this.changeYear(2022));
        this.addDriver = (driver) => this.driver = driver;
        this.addDriver({name: 'Olga', status: true, category: 'B'});
        console.log(this.driver);
    }
}

console.log(new Car2('Grand Cherokee', ' Jeep', 2023, 200, 3));

//-створити класс/функцію конструктор попелюшка з полями імя, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити обєкт класу "принц" за допомоги класу який має поля імя, вік, туфелька яку він знайшов.
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку.
class Cinderella {
    constructor(age, name, shoeSize) {
        this.age = age;
        this.name = name;
        this.shoeSize = shoeSize;
    }
}

let princesses = [
    new Cinderella('20', 'Olga', 36),
    new Cinderella('19', 'Sofia', 35),
    new Cinderella('21', 'Masha', 34),
    new Cinderella('22', 'Dasha', 39),
    new Cinderella('23', 'Anna', 52),
    new Cinderella('25', 'Katya', 38),
    new Cinderella('24', 'Ira', 40),
    new Cinderella('18', 'Masha', 41),
    new Cinderella('26', 'Olga', 42),
    new Cinderella('28', 'Sofia', 43),
];

class prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let princeLeonid = new prince('Leonid', 42, 35,);

for (const princess of princesses) {
    if (princess.shoeSize === princeLeonid.shoe) {
        console.log(princess);
    }
}

console.log(princesses.find(value => value.shoeSize === princeLeonid.shoe));

