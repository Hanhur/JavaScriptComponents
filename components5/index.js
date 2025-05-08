//  Task 1
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
const out1 = document.querySelector('.out-1');

function t1() {
    let resultString = '';

    for (let i = 1; i <= 16; i++) {
        resultString += i + '_';
    }

    out1.textContent = resultString;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
// 12_14_16_18_20_22_24_26_28_30_32_34_36_38_
//Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
const out2 = document.querySelector('.out-2');

function t2() {
    let resultString = '';

    for (let i = 12; i <= 38; i += 2) {
        resultString += i + '_';
    }
    out2.textContent = resultString;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
const out3 = document.querySelector('.out-3');

function t3() {
    let resultString = '';

    for (let i = 25; i >= 7; i--) {
        resultString += i + '_';
    }
    out3.textContent = resultString;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
const out4 = document.querySelector('.out-4');

function t4() {
    let resultString = '';

    for (let i = 77; i >= 35; i -= 3) {
        resultString += i + '_';
    }
    out4.textContent = resultString;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
const out5 = document.querySelector('.out-5');

function t5() {
    let resultString = '';

    for (let i = 1; i <= 17; i++) {
        resultString += i + '_';

        if (i % 2 === 0) {
            resultString += '**';
        }
        else {
            resultString += '*';
        }
    }
    out5.textContent = resultString;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//
const input6 = document.querySelector('.i-6');
const out6 = document.querySelector('.out-6');

function t6() {
    out6.innerHTML = '';

    const count = input6.value || 0;

    for (let i = 0; i < count; i++) {
        const str = '******<br>';
        out6.innerHTML += str;
    }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция t7, которая выводит в .out-7 числа от введенного пользователем до нуля включительно.
// Разделитель - знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4_3_2_1_0_
// Задача решается с помощью цикла.
const input7 = document.querySelector('.i-7');
const out7 = document.querySelector('.out-7');

function t7() {
    let resultString = '';

    for (let i = +input7.value; i >= 0; i--) {
        resultString += i + '_';
    }
    out7.textContent = resultString;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция t8, которая выводит в .out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//  4_5_6_7_8_
// Задача решается с помощью цикла.
const input81 = document.querySelector('.i-81');
const input82 = document.querySelector('.i-82');
const out8 = document.querySelector('.out-8');

function t8() {
    let number1 = +input81.value;
    let number2 = +input82.value;

    let resultString = '';

    for (let i = number1; i <= number2; i++) {
        resultString += i + '_';
    }

    out8.textContent = resultString;

}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция t9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель - подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
// 4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один
const input91 = document.querySelector('.i-91');
const input92 = document.querySelector('.i-92');
const out9 = document.querySelector('.out-9');

function t9() {
    let number1 = +input91.value;
    let number2 = +input92.value;

    let resultString = '';

    let minNumber = Math.min(number1, number2);
    let maxNumber = Math.max(number1, number2);

    for (let i = minNumber; i <= maxNumber; i++) {
        resultString += i + '_';
    }
    out9.textContent = resultString;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1970 включительно.
// Разделитель - знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).
const out10 = document.querySelector('.out-10');

function t10() {
    let resultString = '';

    for (let year = 1950; year <= 1970; year += 2) {
        resultString += year + '_';
    }

    out10.textContent = resultString;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка .b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11 в переменную divs11
// перебрать их с помощью цикла. Обращение к div выглядит так divs[i].innerHTML
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_
const divs11 = document.querySelectorAll('.div-11');
const out11 = document.querySelector('.out-11');

function t11() {
    var resultString = '';

    for (var i = 0; i < divs11.length; i++) {
        resultString += divs11[i].innerHTML + '_';
    }

    out11.textContent = resultString;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
const div12 = document.querySelectorAll('.div-12');

function t12() {
    for (var i = 0; i < div12.length; i++) {
        div12[i].style.background = "orange";
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// С помощью цикла присвойте всем input .i-13 value равное 1 для первого, 2 для второго и 3 для третьего.
const input13 = document.querySelectorAll('.i-13');

function t13() {
    for (var i = 0; i < input13.length; i++) {
        input13[i].value = i + 1;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
const input14 = document.querySelectorAll('.i-14');
const out14 = document.querySelector('.out-14');

function t14() {
    let selectedValue = '';

    for (let i = 0; i < input14.length; i++) {
        if (input14[i].checked) {
            selectedValue = input14[i].value;
            break;
        }
    }

    out14.textContent = selectedValue;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Подсказка (10 - i) + '_' + i + '_'
const out15 = document.querySelector('.out-15');

function t15() {
    
    let resultString = '';

    for (let i = 0; i <= 10; ++i) {
        resultString += (10 - i) + '_' + i + '_';
    }

    out15.textContent = resultString;
}

document.querySelector('.b-15').onclick = t15;
