/*
    В предыдущей главе была представлена стандартная функция Math.min,
    которая возвращает наименьший из ее аргументов. Теперь мы можем сами
    создать нечто подобное. Напишите функцию min, которая принимает два
    аргумента и возвращает их минимум.
 */

console.log('функция min, которая принимает два аргумента и возвращает их минимум');
let min = function (a, b) {
    return (a < b) ? a : b;
};
console.log(min(45, 34));


/*
    Один из способов определить, является ли положительное целое число четным или нечетным:
    - ноль четный;
    - единица нечетная;
    - четность любого другого числа N совпадает с четностью N - 2.

    Определите рекурсивную функцию isEven, соответствующую этому описанию.
    Функция должна принимать один параметр (положительное целое число) и возвращать логическое значение.
    Проверьте эту функцию на числах 50 и 75. Посмотрите, как она ведет себя для -1. Почему?
    Можете ли вы придумать способ, как это исправить?
 */

let isEven = function (n) {
    if (n === 0) return true;
    else if (n === 1) return false;

    return (n > 0) ? isEven(n - 2) : isEven(n + 2);
};
console.log('рекурсивная функция min, которая определяет четное или нечетное число');
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/*
    Напишите функцию countBs, которая принимает строку в качестве единственного
    аргумента и возвращает число, показывающее, сколько больших
    букв "B"содержится в этой строке.
 */

let countBs = function (str) {
    let counter = 0;
    function count(n) {
        if (n === -1) return;
        if (str[n] === 'B') counter++;
        return count(n - 1);
    }
    count(str.length - 1);
    return counter;
};

console.log(countBs("ffffBBB"));

let countChar = function (str, sym) {
    let counter = 0;
    function count(n) {
        if (n === -1) return;
        if (str[n] === sym) counter++;
        return count(n - 1);
    }
    count(str.length - 1);
    return counter;
};

console.log(countChar("ffffBBB", "B"));