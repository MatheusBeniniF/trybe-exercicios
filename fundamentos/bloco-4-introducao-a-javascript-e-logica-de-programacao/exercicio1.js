let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};
console.log('Bem-vinda, ' + info.personagem);
    
for(let index in info) {
    console.log(index);
}

for(let index in info) {
    console.log(info[index]);
}

let secondInfo = {
  personagem: 'Tio patinhas',
  origem: 'Christmas on Bear Mountain',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}
console.log(info.personagem + ' e ' + secondInfo.personagem);
console.log(info.origem + ' e ' + secondInfo.origem);
console.log(info.nota + ' e ' + secondInfo.nota);
if(info.recorrente === 'Sim' && secondInfo.recorrente === 'Sim'){
  console.log("Ambos recorrentes");
}
else {
  console.log(info.personagem + ' é ' + info.recorrente + ' recorrente ' + secondInfo.personagem + ' é ' + secondInfo.recorrente + ' recorrente ' );
}
