let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMaior = 0;
for(let m = 0; m < numbers.length; m++) {
    if(numbers[m] > valorMaior) {
    valorMaior = numbers[m];
    }
}
console.log(valorMaior);
