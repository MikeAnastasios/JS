
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem('5', 11);
    let a = localStorage.getItem('5');
    document.querySelector('.out-1').innerHTML = a;
    console.log(a);
}

document.querySelector('.b-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
const a2 = [7, 6, 5];

function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
    let b = JSON.parse(localStorage.getItem('a2'));
}

document.querySelector('.b-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let b = JSON.parse(localStorage.getItem('a2'));
    let out = '';
    for (let i = 0; i < b.length; i++) {
        out += `${i} ${b[i]} <br>`;
    }
    document.querySelector('.out-3').innerHTML = out;
}


document.querySelector('.b-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
let a4 = {
    'hello': 'world',
    'hi': 'mahai'
};
function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
    let out = '';
    let a = [];
    a4 = localStorage.getItem('a4');
    a4 = JSON.parse(a4);
    for (let key in a4) {
        out += `${key} ${a4[key]} <br>`;
    }
    document.querySelector('.out-5').innerHTML = out;
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear()
}

document.querySelector('.b-6').onclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let i = document.querySelector('.i-7');
let a7 = [];
function t7() {
    if (localStorage.getItem('a7')) {
        a7 = JSON.parse(localStorage.getItem('a7'));
    }
    let val = i.value;
    a7[a7.length] = val;
    localStorage.setItem('a7', JSON.stringify(a7))
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    if (localStorage.getItem('a7')) {
        a7 - JSON.parse(localStorage.getItem('a7'))
    }
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;