// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.
let btn1 = document.querySelector('.btn1');
let btn11 = document.querySelector('.btn1-1');
let answer1 = document.querySelector('.answer1');
// Новый объект
let dopInfo = {};
// Сщбираем объект
function zajavka() {
    dopInfo.nik = document.querySelector('.input-nic').value;
    dopInfo.class = document.querySelector('.input-class').value;
    dopInfo.win = document.querySelector('.input-win').value;
}
btn1.onclick = zajavka;

function userInfo(obj) {
    const value = obj;
    // Создаем новый объект с __proto__
    const result = Object.create(value);
    // Добавляем новое свойство
    result.clan = "Wolfs";
    result.person = "commander";

    answer1.innerHTML = '';
    for (let key in result) {
        if (result.hasOwnProperty(key)) {
            // Выводим в консоль все ключи и значения только собственных свойств (по заданию)
           answer1.innerHTML += `<p>${key}: ${result[key]}</p>`; 
           console.log(`${key}: ${result[key]}`);
        }   
    }
    console.log(result);
}
// Запуск решения
function createZajavka() {
    // Передаем в функцию объект (по заданию)
    userInfo(dopInfo);
}
btn11.onclick = createZajavka;
