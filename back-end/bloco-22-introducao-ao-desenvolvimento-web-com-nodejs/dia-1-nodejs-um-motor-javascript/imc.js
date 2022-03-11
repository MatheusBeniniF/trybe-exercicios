const readline = require('readline-sync');

function calculoImc(){
  const peso = readline.question('Qual seu peso?')
  const altura = readline.question('Qual sua altura?');

  const imc = (peso)/(altura*altura);
  console.log(`IMC: ${imc}`);
}

calculoImc();
