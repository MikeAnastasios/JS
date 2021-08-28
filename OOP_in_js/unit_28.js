// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
let arr = new Goods('Fingers', '5');
console.log(arr);
//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.
let arr2 = new Goods('vegetables', '10', 'any_img', '20');
console.log(arr2);
//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
let newGoods = new Goods('Mercedes AMG GT Hatchback', '2 units available', 'https://cdn.productreview.com.au/resize/listing-picture/ed479e6c-d4e7-4500-9c51-c0dc1f3e0681?width=170&height=170&dpr=2&v=2', '90.000$');
let outGoods = newGoods.draw();
document.querySelector('.out-1').append(outGoods);

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
let goods2 = new Goods('Da Vinci (da Vinci Surgical System)', '1', 'http://www.urologicalcancercentre.com.au/images/robo-da-vinci.png', '2.000.000$')
let outGoods2 = goods2.draw();
document.querySelector('.out-4').append(outGoods2);
//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

let task5 = new Goods2('AirPods', '12 units in stocks', 'https://cenu.lv/web/image/product.template/46798/image_256', '149.00 €', true);
let out5 = task5.draw();
document.querySelector('.out-5').append(out5);

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
let goods3 = new Goods2('iPhone 12 Pro Max', '10 units in stocks', 'https://www.blitzmicro.eu/11078-medium_default/AP-MGDA3QLA.jpg', '1.289,00 €', true);
let outGoods3 = goods3.draw();
document.querySelector('.out-6').append(outGoods3);

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.


//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
let t8 = new Valid('papa@gmail.com', 'abcde');
t8.validate();
console.log(t8);

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
let t9 = new Valid('papapa@gmail.com', '1234567');
t9.validate();
console.log(t9);

//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.


//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let t11 = new Valid2('', 'asdf')
t11.validate();
console.log(t11);

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let t12 = new Valid2('alalala@gmail.com', '123456', 'passnotdefined', 'emailnotdefined')
t12.validate();
console.log(t12);