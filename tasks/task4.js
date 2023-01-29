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