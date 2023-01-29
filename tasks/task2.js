// Валидация числа
let flag = true;

function validation(numV) {
    let number = +numV;
    if (number !== 0) {
        if (typeof number === "number") {
            if (isNaN(number)) {
                flag = false;
                return flag;
            } else {
                flag = true;
                return flag;
            }
        } else {
            flag = false;
            return flag;
        }
    } else {
        flag = false;
        return flag;
    }
}
// Задание 2
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны.
// Обратите внимание на числа 0 и 1.
let answer2 = document.querySelector('.answer2');
let input2 = document.querySelector('.input2');
let btn2 = document.querySelector('.btn2');

function checkingNumber(num) {
    validation(num); // проверка на число смотри в вверху

    if (flag === true) {
        //Проверяем число: простое или нет
        if (num > 1 && num < 1001) {
            let ok = true;
            for(i = 2; i <= num - 1; i++)
                if (num % i == 0) {
                    ok = false;
                    break;
                }
            // Выводим сообщение
            if (ok == true)
            answer2.innerHTML = (result + " - число является простым");
            else
            answer2.innerHTML = (result + " - число не является простым");

        } else {
            answer2.innerHTML = '!!!Данные не верны!!!';
        }
    } else {
        answer2.innerHTML = '!!!Ввели не число!!!';
    }
}

btn2.onclick = () => {
    let result2 = +input2.value;
    checkingNumber(result2);
    input2.value = '';
}