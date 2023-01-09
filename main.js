// 1 задание //

let names = prompt('Введите свое имя')
let year = +prompt('Введите свой год рождения')
let cur = +prompt('Введите нынешний год')
  
function param( a,b,c){
let sum = a + ' ' + ',' + 'Ваш возраст ' + (c - b) + 'лет';
return sum
}
console.log(param(names,year,cur));







// 2 задание //

let one = +prompt('Введите количество примеров');
let minNumber = +prompt('Введите наименьшее число');
let maxNumber = +prompt('Введите наибольшее число');

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min) // создали функцию для чисел //
}

function randSym() {
    return Math.floor(Math.random() * (6 - 1) + 1) // создали функцию для знаков //
}


for (let i = 1; i < one; i++) {
    let odin = rand(minNumber, maxNumber),
        two = rand(minNumber, maxNumber),
        symbol = randSym(), // символы , знаки (+ - / *) //
        example = 0; // условие + ответ ,который подсчитает сам JS (odin + two) //
    if (symbol == 1) {
        symbol = '+';
        example = odin + two;
    } else if (symbol == 2) {
        symbol = '-';
        example = odin - two;
    } else if (symbol == 3) {
        symbol = '*';
        example = odin * two;
    } else if (symbol == 4) {
        symbol = '/';
        example = odin / two;
    }else if(symbol == 5){
        symbol = '%';
        example = odin % two;
    }
    let primer = +prompt(odin + symbol + two); // ответ , который вводит пользователь //
    alert(primer == example ? 'Ваш ответ верный ' + primer : 'Ваш ответ не верный ' + primer + ' Правильный ответ ' + example)
}
