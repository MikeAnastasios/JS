
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t1() {
    let a1 = new XMLHttpRequest();
    a1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction1(this.responseText);
        }
    }

    a1.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1", true);
    a1.send();

    function myFunction1(data) {
        let b1 = data;
        document.querySelector('.out-1').innerHTML = b1;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;
// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    let a2 = new XMLHttpRequest();
    a2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction2(this.responseText);
        }
    }

    a2.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2&name=Mike", true);
    a2.send();

    function myFunction2(data) {
        let b2 = data;
        document.querySelector('.out-2').innerHTML = b2;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
    let a3 = new XMLHttpRequest();
    a3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction3(this.responseText);
        }
    }

    a3.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=3&num1=22&num2=11", true);
    a3.send();

    function myFunction3(data) {
        let b3 = data;
        document.querySelector('.out-3').innerHTML = b3;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let a4 = new XMLHttpRequest();
    a4.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction4(this.responseText);
        }
    }

    a4.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=4&num1=0&num2=10", true);
    a4.send();

    function myFunction4(data) {
        let b4 = data;
        document.querySelector('.out-4').innerHTML = b4;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;
// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let a5 = new XMLHttpRequest();
    a5.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction5(this.responseText);
        }
    }

    a5.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=5", true);
    a5.send();

    function myFunction5(data) {
        let b5 = data;
        document.querySelector('.out-5').innerHTML = b5;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;
// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    let a6 = new XMLHttpRequest();
    a6.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction6(this.responseText);
        }
    }

    a6.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=6&num1=22&num2=22", true);
    a6.send();

    function myFunction6(data) {
        let b6 = data;
        document.querySelector('.out-6').innerHTML = b6;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let a7 = new XMLHttpRequest();
    a7.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction7(this.responseText);
        }
    }

    a7.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=7", true);
    a7.send();

    function myFunction7(data) {
        let b7 = data;
        document.querySelector('.out-7').innerHTML = b7;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;
// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let a8 = new XMLHttpRequest();
    a8.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction8(this.responseText);
        }
    }

    a8.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=8&year=1995", true);
    a8.send();

    function myFunction8(data) {
        let b8 = data;
        document.querySelector('.out-8').innerHTML = b8;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;
// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
    let a9 = new XMLHttpRequest();
    a9.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction9(this.responseText);
        }
    }

    a9.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=9&y=1", true);
    a9.send();

    function myFunction9(data) {
        let b9 = data;
        document.querySelector('.out-9').innerHTML = b9;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-9').onclick = t9;

// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    let a10 = new XMLHttpRequest();
    a10.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction10(this.responseText);
        }
    }

    a10.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1", true);
    a10.send("auth=DdC33D7d2C2a7");

    function myFunction10(data) {
        let b10 = data;
        document.querySelector('.out-10').innerHTML = b10;
    }
}

document.querySelector('.b-10').onclick = t10;
// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    let a11 = new XMLHttpRequest();
    a11.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction11(this.responseText);
        }
    }

    a11.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2&name=Mike", true);
    a11.send("auth=DdC33D7d2C2a7");

    function myFunction11(data) {
        let b11 = data;
        document.querySelector('.out-11').innerHTML = b11;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-11').onclick = t11;
// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    let a12 = new XMLHttpRequest();
    a12.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction12(this.responseText);
        }
    }

    a12.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=3&num1=134&num2=123", true);
    a12.send("auth=DdC33D7d2C2a7");

    function myFunction12(data) {
        let b12 = data;
        document.querySelector('.out-12').innerHTML = b12;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-12').onclick = t12;
// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
    let a13 = new XMLHttpRequest();
    a13.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction13(this.responseText);
        }
    }

    a13.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=4&num1=134&num2=123", true);
    a13.send("auth=DdC33D7d2C2a7");

    function myFunction13(data) {
        let b13 = data;
        document.querySelector('.out-13').innerHTML = b13;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-13').onclick = t13;
// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    let a14 = new XMLHttpRequest();
    a14.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction14(this.responseText);
        }
    }

    a14.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=5", true);
    a14.send("auth=DdC33D7d2C2a7");

    function myFunction14(data) {
        let b14 = data;
        document.querySelector('.out-14').innerHTML = b14;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-14').onclick = t14;
// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    let a15 = new XMLHttpRequest();
    a15.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction15(this.responseText);
        }
    }

    a15.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=6&num1=123&num2=123", true);
    a15.send("auth=DdC33D7d2C2a7");

    function myFunction15(data) {
        let b15 = data;
        document.querySelector('.out-15').innerHTML = b15;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-15').onclick = t15;
// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    let a16 = new XMLHttpRequest();
    a16.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction16(this.responseText);
        }
    }

    a16.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=7", true);
    a16.send("auth=DdC33D7d2C2a7");

    function myFunction16(data) {
        let b16 = data;
        document.querySelector('.out-16').innerHTML = b16;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-16').onclick = t16;
// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    let a17 = new XMLHttpRequest();
    a17.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction17(this.responseText);
        }
    }

    a17.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=8&year=1995", true);
    a17.send("auth=DdC33D7d2C2a7");

    function myFunction17(data) {
        let b17 = data;
        document.querySelector('.out-17').innerHTML = b17;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-17').onclick = t17;
// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
    let a18 = new XMLHttpRequest();
    a18.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction18(this.responseText);
        }
    }

    a18.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=9&y=1", true);
    a18.send("auth=DdC33D7d2C2a7");

    function myFunction18(data) {
        let b18 = data;
        document.querySelector('.out-18').innerHTML = b18;
    }
}

// ваше событие здесь!!!
document.querySelector('.b-18').onclick = t18;
