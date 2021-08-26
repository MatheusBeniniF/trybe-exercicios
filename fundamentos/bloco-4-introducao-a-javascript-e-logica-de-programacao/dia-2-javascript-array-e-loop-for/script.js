let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let s = 0; s < numbers.length; s++) {
    soma = soma + numbers[s];
    console.log(soma);
}
let medAritimetica = soma/(numbers.length);
console.log(medAritimetica);

if(medAritimetica > 20) {
    console.log('Valor maior que 20');
}

else {
    console.log('Valor menor ou igual a 20');
}