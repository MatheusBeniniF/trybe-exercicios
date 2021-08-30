function menorNum(numbers) {
    let menorIndex = 0;
    for (let index in numbers) {
        if (numbers[menorIndex] > numbers[index]){
            menorIndex = index;
        }
    }
    return menorIndex;
}
console.log(menorNum([2, 4, 6, 7, 10, 0, -3]));

