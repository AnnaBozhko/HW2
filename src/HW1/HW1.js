// Условные операторы
// 1.	Если а – четное посчитать а*б, иначе а+б
const getSumOrMultiByEven = (a, b) => a % 2 === 0 ? a * b : a + b;

//function getSumOrMultiByEven (numberFirst,numberSecond) {
// return numberFirst % 2 == 0 ? numberFirst * numberSecond : numberFirst + numberSecond;
//}


//2.	Определить какой четверти принадлежит точка с координатами (х,у)

function showPointQuarterCoordinate(x,y) {
    if (x==0 || y==0) {
        return ((x == 0 && y == 0) ? "Coordinate center" : "O" + ((x == 0 ? "Y" : "X")))
    } else {
        if (x > 0 && y > 0) {
            return ("I");
        }
        if (x > 0 && y < 0) {
            return ("IV");
        }
        if (x < 0 && y < 0) {
            return ("III");
        }
        if (x < 0 && y > 0) {
            return ("II");
        }
    }
}

//3.	Найти суммы только положительных из трех чисел

function getSumOnlyPositive(a,b,c) {
    let sum = 0;
        if (a > 0) {
            sum += a;
        }
        if (b > 0) {
            sum += b;
        }
        if (c > 0) {
            sum += c;
        }
        return sum;
}

// 4.	Посчитать выражение макс(а*б*с, а+б+с)+3

function getMaxByEven(a, b, c) {
    let result;
    let sum = a + b + c;
    let multi = a * b * c;

    if ( sum > multi) {
        result = sum + 3;
    } else {
        result = multi +3;
    }
    return result;
}

// 5.	Написать программу определения оценки студента по его рейтингу, на основе правил
// Рейтинг 	Оценка
// 0-19	    F
// 20-39	E
// 40-59	D
// 60-74	C
// 75-89	B
// 90-100	A

function getMarkByRating(rating) {
    switch (true) {
        case rating > 0 && rating < 20 :
            return "F";
            break;
        case rating >= 20 && rating < 40 :
            return "E";
            break;
        case rating >= 40 && rating < 60 :
            return "D";
            break;
        case rating >= 60 && rating < 75 :
            return "C";
            break;
        case rating >= 75 && rating < 90 :
            return "B";
            break;
        case rating >= 90 && rating <= 100 :
            return "A";
            break;
        default :
            return "Invalid argument provided!"
    }
}

// Циклы
// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function getSumAndQuantity() {
    let i;
    let sum = 0;
    let quantity = 0;
    for (i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            sum += i;
            quantity++;
        }
    }
    // for (i = 1; i < 100; i += 2) {
    //     if (i === 1) {
    //         i++;
    //     }
    //     sum += i;
    //     quantity++;
    // }
    return {
        sum,
        quantity,
    }
}

// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
function factorial(n) {
    return (n !=1) ? n * factorial(n-1) : 1;
}

// 5.	Посчитать сумму цифр заданного числа
const getSumNumber = n => {
    result = null;
    remain = null;
    while (n) {
        remain = n % 10;
        n = (n - remain) / 10;
        result += remain;
    }
    return result;
}


// 6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
const getMirrorNumber = s => {
    let x = 0;
    while (s > 0) {
        x = x * 10 + s % 10;
        s = parseInt(s / 10);
    }
    return x;
}


//1.	Найти минимальный элемент массива
// 2.	Найти максимальный элемент массива
// 3.	Найти индекс минимального элемента массива
const getMinIndex = array => {
    if (!array.length) {
        return -1;
    }

    let minIndex = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
    }

    return minIndex;
};
// 4.	Найти индекс максимального элемента массива
const getMaxIndex = array => {
    if (!array.length) {
        return -1;
    }

    let maxIndex = 0;

    for(let i = 1; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            minIndex = i;

        }
    }

    return minIndex;
};
// 5.	Посчитать сумму элементов массива с нечетными индексами
// 6.	Сделать реверс массива (массив в обратном направлении)
// 7.	Посчитать количество нечетных элементов массива
// 8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
//10.	Отсортировать массив (Quick, Merge, Shell, Heap)

//Функции
//1.	Получить строковое название дня недели по номеру дня.

var weekday=new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";
console.log("Today is " + weekday[5]);