// -створити форму з інпутами для name та age.
//     При відправці форми записати обєкт в localstorage
// let form = document.createElement('form');
// form.setAttribute('name', 'mainForm');
// let name = document.createElement('input');
// name.setAttribute('name', 'name');
// name.setAttribute('type', 'text');
// let age = document.createElement('input');
// age.setAttribute('name', 'age');
// age.setAttribute('type', 'number');
// let button = document.createElement('button');
// document.body.appendChild(form);
// form.append(name, age, button);
//
// let main = document.forms.mainForm;
// main.onsubmit = function (eventObject) {
//     eventObject.preventDefault();
//     let name = this.name.value;
//     let age = this.age.value;
//     localStorage.setItem('user', JSON.stringify({name, age}));
// };

// -створити форму з інпутами для model, type та volume автівки.
//     при відпарвці форми обєкти зберігаються в масиві в локальному сховищі.
// let form = document.createElement('form');
// form.setAttribute('name', 'newCar');
// let model = document.createElement('input');
// model.setAttribute('name', 'model');
// model.setAttribute('type', 'text');
// let type = document.createElement('input');
// type.setAttribute('name', 'type');
// type.setAttribute('type', 'text');
// let volume = document.createElement('input');
// volume.setAttribute('name', 'volume');
// type.setAttribute('type', 'number');
// let carButton = document.createElement('button');
// document.body.appendChild(form);
// form.append(model, type, volume, carButton);
//
// let newCar = document.forms.newCar;
// newCar.onsubmit = function (eventObject) {
//     eventObject.preventDefault();
//     let model = this.model.value;
//     let type = this.type.value;
//     let volume = this.volume.value;
//     let car = {model, type, volume};
//     let cars = JSON.parse(localStorage.getItem('cars')) || [];
//     cars.push(car);
//     localStorage.setItem('cars', JSON.stringify(cars));
// };