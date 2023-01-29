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
