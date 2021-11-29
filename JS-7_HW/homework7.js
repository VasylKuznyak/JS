// - Створити функцію конструктор для обєктів User з полями id, name, surname, email, phone
function User(id, name, surname, phone, user, email) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.user = user;
    this.email = email;
}

// створити пустий масив, наповнити його 10 обєктами new User(....)
let usersArray = [
    new User(1, 'Anna', 'apple', 52146143, 10, 'example1.com'),
    new User(2, 'Viktoria', 'banana', 5213523, 9, 'example2.com'),
    new User(3, 'Sofia', 'orange', 5124123, 8, 'example3.com'),
    new User(4, 'Vasyl', 'lemon', 523654223, 7, 'example4.com'),
    new User(5, 'Masha', 'pear', 52124455523, 6, 'example5.com'),
    new User(6, 'Petro', 'tangerine', 523634223, 5, 'example6.com'),
    new User(7, 'Katya', 'coconut', 5231212423, 4, 'example7.com'),
    new User(8, 'Misha', 'pineapple', 534625523, 3, 'example8.com'),
    new User(9, 'Natalia', 'plum', 523321523, 2, 'example9.com'),
    new User(10, 'Taras', 'grapefruit', 525235523, 11, 'example10.com'),
];
console.log(usersArray)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки обєкти з парними id (filter)
let filteredUsers = usersArray.filter(element => element.id % 2 === 0);
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = filteredUsers.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

// - створити класс для обєктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 обєктами Client
let clientArray = [
    new Client(1, 'Anna', 'apple', 'example1.com', 52146143, [10, 48, 35, 73]),
    new Client(2, 'Viktoria', 'banana', 'example2.com', 5213523, [9, 97]),
    new Client(3, 'Sofia', 'orange', 'example3.com', 5124123, [8]),
    new Client(4, 'Vasyl', 'lemon', 'example4.com', 523654223, [77, 5, 98]),
    new Client(5, 'Masha', 'pear', 'example5.com', 52124455523, [6, 54, 7]),
    new Client(6, 'Petro', 'tangerine', 'example6.com', 523634223, [5, 49, 97, 87]),
    new Client(7, 'Katya', 'coconut', 'example7.com', 5231212423, [4, 97, 3]),
    new Client(8, 'Misha', 'pineapple', 'example8.com', 534625523, [3, 94, 68, 45, 23]),
    new Client(9, 'Natalia', 'plum', 'example9.com', 523321523, [2, 6, 8]),
    new Client(10, 'Taras', 'grapefruit', 'example10.com', 525235523, [11, 20, 30]),
];
console.log(clientArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = clientArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);