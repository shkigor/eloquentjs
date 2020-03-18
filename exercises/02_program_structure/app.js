
// программа, которая выводит все четные числа от О до 12.
console.log('программа, которая выводит все четные числа от О до 12:');

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }
  // → 0
  // → 2
  //   … etcetera


// программа, вычисляющая и показывающая значение 2^10
// (2 в степени 10).
console.log('программа, вычисляющая и показывающая значение 2^10:');

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

let result2 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result2 = result2 * 2;
}
console.log(result2);
// → 1024


/* Построение треугольника в цикле

Напишите цикл, который делает семь вызовов console.log и выводит следующий треугольник:
#
##
###
####
#####
######
#######
*/
console.log('Построение треугольника в цикле:');

for (let i = 0; i < 7; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += '#';
    }
    console.log(row);
    
}


/* FizzBuzz

Напишите программу, в которой с помощью console.log выводятся все числа
от 1 до 100 с двумя исключениями. Для чисел, кратных 3, вместо числа
выводится "Fizz", а для чисел, кратных 5 (но не 3), - "Buzz".

Когда это заработает, измените программу так, чтобы она печатала "FizzBuzz"
для чисел, которые делятся и на 3, и на 5 (и по-прежнему печатайте "Fizz"
или "Buzz" для чисел, кратных только одному из них).
*/
console.log('FizzBuzz:');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    
}


/* Шахматная доска

Напишите программу, которая создает строку, представляющую сетку 8 х 8,
используя для разделения строк символы новой строки. В каждой позиции
сетки стоит либо пробел, либо символ"#". Эти символы должны располагаться
в шахматном порядке.
Передавая данную строку в console.log, вы должны получить что-то вроде
этого:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
 # # # #
 # # # #
# # # #
Если вы уже написали программу, которая генерирует этот узор, определите
привязку size = 8 и измените программу так, чтобы она работала для любого
size, выводя сетку заданных ширины и высоты.
*/
console.log('Шахматная доска:');

let size = 16;
let stroka = '';
for (let i = 1; i <= size; i++) {

    for (let j = 1; j <= size; j++) {
        let symbol;
        if (i % 2 === 0) {
            symbol = (j % 2 === 0) ? ' ' : '#';
        } else {
            symbol = (j % 2 === 0) ? '#' : ' ';
        }
        stroka += symbol;
        
    }
    stroka += '\n';
    
}

console.log(stroka);
