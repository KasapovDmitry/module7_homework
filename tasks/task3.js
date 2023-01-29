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