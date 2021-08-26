let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMenor = 200;
for (let c = 1; c < numbers.length; c++) {
    if(numbers[c] < valorMenor) {
        valorMenor = numbers[c];
    }
}
console.log(valorMenor);