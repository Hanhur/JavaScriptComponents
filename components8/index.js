//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида (... это просто для сокращения здесь. Вы выводите все числа от 1 до 50. Все. Три точки мы не выводим!!!!!):
//     1_2_3_4_5_6_7_8_9_ ... 49_50_
// от 1 до 50 включительно. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
const out1 = document.querySelector('.out-1');

function t1() {
    let output = '';

    for(let i = 1; i <= 50; i++)
    {
        output+= i + '_';
    }
    out1.textContent = output;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида (вы выводите все числа с шагом 2 без пропуска. Три точки не выводите! Пропуска чисел с 6 по 44 нет. ):
//     2_4_6_ ... 44_46_
// от 2 до 46 c шагом 2. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.

const out2 = document.querySelector('.out-2');

function t2() {
    let output = '';
    let i = 2;

    while(i <= 46)
    {
        output+= i + '_';
        i += 2;
    }
    out2.textContent = output;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// от 25 до 7 c шагом 1. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
const out3 = document.querySelector('.out-3');

function t3() {
    let output = '';
    let i = 25;

    while(i >= 7)
    {
        output+= i + '_';
        i--;
    }
    out3.textContent = output;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
const out4 = document.querySelector('.out-4');

function t4() {
    let output = '';
    let i = 77;

    while(i >= 35)
    {
        output+= i + '_';
        i -= 3;
    }
    out4.textContent = output;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и одна звездочка если число нечетное, и две звездочки если четное. Задача решается с помощью цикла  while.
const out5 = document.querySelector('.out-5');

function t5() {
    let output = '';
    let i = 1;

    while(i <= 17)
    {
        if(i % 2 === 0)
        {
            output+= i + '_**';
        }
        else
        {
            output+= i + '_*';
        }
        i++;
    }
    out5.textContent = output;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в .i-6.
const out6 = document.querySelector('.out-6');

function t6() {
    let output = '';
    let count = document.querySelector('.i-6').value;
    let i = 0;

    while(i < count)
    {
        output += '******<br>';
        i++;
    }
    out6.innerHTML = output;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция f7, которая выводит в .out-7 числа от введенного пользователем включительно до нуля включительно.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4_3_2_1_0_
// Задача решается с помощью цикла  while.
const out7 = document.querySelector('.out-7');

function t7() {
    let output = '';
    let number = document.querySelector('.i-7').value;
    let i = number;

    while(i >= 0)
    {
        output+= i + '_';
        i--;
    }
    out7.textContent = output;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция f8, которая выводит в .out-8 числа от первого введенного включительно до второго включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// Задача решается с помощью цикла  while.
const out8 = document.querySelector('.out-8');

function t8() {
    let output = '';
    let number1 = document.querySelector('.i-81').value;
    let number2 = document.querySelector('.i-82').value;
    let i = number1;

    while(i <= number2)
    {
        output+= i + '_';
        i++;
    }
    out8.textContent = output;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция f9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку и при необходимости поменять местами значения в переменных местами, а потом запускаем цикл  while.
const out9 = document.querySelector('.out-9');

function t9() {
    let output = '';
    let number1 = document.querySelector('.i-91').value;
    let number2 = document.querySelector('.i-92').value;

    if(number1 > number2)
    {
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }

    let i = number1;

    while(i <= number2)
    {
        output+= i + '_';
        i++;
    }
    out9.textContent = output;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1966 включительно.
// Разделитель знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).
const out10 = document.querySelector('.out-10');

function t10() {
    let output = '';
    let year = 1950;

    while (year <= 1966) 
    {
        output += year + '_'; 
        year += 2;
    }
    out10.textContent = output;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так ваша_переменная[i]
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_
const out11 = document.querySelector('.out-11');

function t11() {
    let output = ''; 
    let i = 0;
    let div = document.querySelectorAll('.div-11');

    while (i < div.length) 
    {
        output += div[i].textContent + '_';
        i++;
    }
    out11.textContent = output;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
// получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = 'orange'


function t12() {
    let div = document.querySelectorAll('.div-12');
    let i = 0;

    while (i < div.length) 
    {
        div[i].style.background = 'orange';
        i++;
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка .b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let input = document.querySelectorAll('.i-13');
    let i = 0; 

    while (i < input.length) 
    {
        input[i].value = i + 1;
        i++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
const out14 = document.querySelector('.out-14');

function t14() {
    let inputs = document.querySelectorAll('.i-14');
    let i = 0;
    let selectedValue = '';

    while (i < inputs.length) 
    {
        if (inputs[i].checked) 
        {
            selectedValue += inputs[i].value; 
            break;
        }
        i++; 
    }
    out14.textContent = selectedValue;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 77_88_99_77_88_99_77_88_99_
// Для вывода использовать цикл  while. Разделитель подчеркивание.
const out15 = document.querySelector('.out-15');

function t15() {
    let output = '';
    let count = 0; 

    while (count < 3) 
    {
        output += '77_88_99_';
        count++; 
    }
    out15.textContent = output;
}

document.querySelector('.b-15').onclick = t15;
