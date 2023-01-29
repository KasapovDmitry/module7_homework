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



// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.
let btn2 = document.querySelector('.btn2');
let answer2 = document.querySelector('.answer2');
let input2 = '';
// Проверяемый объект
const obj2 = {
    name: 'Ivan',
    age: '20',
    city: 'Moscow'
};
function checkValue(str, obj) {
    let flag;
    for (let key in obj) {
        if (key == str) {
            flag = true;
            answer2.innerHTML = `Такое свойство (${key}) ЕСТЬ! (${flag})`;
            break;
        } else {
            flag = false;
            answer2.innerHTML = `Такого свойства (${key}) НЕТ! (${flag})`;
        }
    }
    return flag;
}
// Запуск решения
function check2() {
    input2 = document.querySelector('.input2').value;
    // Передаем в функцию строку и объект (по заданию)
    checkValue(input2, obj2);
}
btn2.onclick = check2;



// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.
let btn3 = document.querySelector('.btn3');
let answer3 = document.querySelector('.answer3');
// Запуск решения
function check3() {
    const emptyObject = Object.create(null);
    answer3.innerHTML = 'const emptyObject = Object.create(null)';
    console.log(emptyObject);
}
btn3.onclick = check3;



// Задание 4.

let luch1 = document.querySelector('.luch1');
let luch2 = document.querySelector('.luch2');
let text1 = document.querySelector('.luch_text1');
let text2 = document.querySelector('.luch_text2');
let btn411 = document.querySelector('.btns-up1');
let btn421 = document.querySelector('.btns-up2');
let btn412 = document.querySelector('.btns-out1');
let btn422 = document.querySelector('.btns-out2');
let rashod = document.querySelector('.rashod');
let vat = 0;

// Зажигаем лампу
function lampBurn(luch) {
    luch.classList.add('active');
}
// Тушим лампу
function lampNotburn(luch) {
    luch.classList.remove('active');
}



// Родитель
function Luch(){
    this.upLuch = function(arg, num){
        num.innerHTML = `${arg} Вт`;
    }
    this.outLuch = function(arg, num){
        num.innerHTML = `${arg} Вт`;
    }
}

// Определяем первую лампу
const lampa1 = new Luch();
lampa1.light = function(arg) {
    lampBurn(arg);
}

// Определяем вторую лампу
const lampa2 = new Luch();
lampa2.nolight = function(arg){
    lampNotburn(arg)
}    


// Работа кнопок
function openLuch1() {
    lampa1.upLuch('60', text1);
    lampa1.light(luch1);
    if (vat != 60) {
        vat += 60;
        rashod.innerHTML = vat + " Вт";
    }
}
btn411.onclick = openLuch1;

function closeLuch1() {
    lampa1.outLuch('0', text1);
    lampa2.nolight(luch1);
    if (vat == 60 || vat == 150) {
        vat = vat - 60;
        rashod.innerHTML = vat + " Вт";
    }
}
btn412.onclick = closeLuch1;

function openLuch2() {
    lampa2.upLuch('90', text2);
    lampa1.light(luch2);
    if (vat != 90) {
        vat += 90;
        rashod.innerHTML = vat + " Вт";
    }
}
btn421.onclick = openLuch2;

function closeLuch2() {
    lampa2.outLuch('0', text2);
    lampa2.nolight(luch2);
    if (vat >= 90) {
        vat = vat - 90;
        rashod.innerHTML = vat + " Вт";
    }
}
btn422.onclick = closeLuch2;



// Задание 5.

let luch51 = document.querySelector('.luch51');
let luch52 = document.querySelector('.luch52');
let text51 = document.querySelector('.luch_text51');
let text52 = document.querySelector('.luch_text52');
let btn511 = document.querySelector('.btns-up51');
let btn521 = document.querySelector('.btns-up52');
let btn512 = document.querySelector('.btns-out51');
let btn522 = document.querySelector('.btns-out52');
let rashod5 = document.querySelector('.rashod5');
let vat5 = 0;

// Зажигаем лампу
function lampBurn5(luch) {
    luch.classList.add('active');
}
// Тушим лампу
function lampNotburn5(luch) {
    luch.classList.remove('active');
}



// Родитель
class Luch5 {
    constructor() {
        this.upLuch5 = function(arg, num){
            num.innerHTML = `${arg} Вт`;
        }
        this.outLuch5 = function(arg, num){
            num.innerHTML = `${arg} Вт`;
        }
    }
}

// Определяем первую лампу
const lampa51 = new Luch5();
lampa51.light5 = function(arg) {
    lampBurn(arg);
}

// Определяем вторую лампу
const lampa52 = new Luch5();
lampa52.nolight5 = function(arg){
    lampNotburn(arg)
}    

// Работа кнопок
function openLuch51() {
    lampa51.upLuch5('60', text51);
    lampa51.light5(luch51);
    if (vat != 60) {
        vat += 60;
        rashod5.innerHTML = vat + " Вт";
    }
}
btn511.onclick = openLuch51;

function closeLuch51() {
    lampa51.outLuch5('0', text51);
    lampa52.nolight5(luch51);
    if (vat == 60 || vat == 150) {
        vat = vat - 60;
        rashod5.innerHTML = vat + " Вт";
    }
}
btn512.onclick = closeLuch51;

function openLuch52() {
    lampa52.upLuch5('90', text52);
    lampa51.light5(luch52);
    if (vat != 90) {
        vat += 90;
        rashod5.innerHTML = vat + " Вт";
    }
}
btn521.onclick = openLuch52;

function closeLuch52() {
    lampa52.outLuch5('0', text52);
    lampa52.nolight5(luch52);
    if (vat >= 90) {
        vat = vat - 90;
        rashod5.innerHTML = vat + " Вт";
    }
}
btn522.onclick = closeLuch52;