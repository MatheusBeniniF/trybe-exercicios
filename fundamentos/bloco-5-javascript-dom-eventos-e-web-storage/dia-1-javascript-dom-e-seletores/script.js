/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function future() {
  let text = document.getElementsByTagName('p')[1];
  text.innerHTML = "Ser feliz e ter muitas conqiustas"
}
future();

function changeBackgroundColor() {
 let color = document.getElementsByClassName("main-content")[0];
  color.style.background = "rgb(76,164,109)";
}
changeBackgroundColor();

function changeCenterBackgroundColor() {
  let color = document.getElementsByClassName('center-content')[0];
  color.style.background = "white";
}
changeCenterBackgroundColor();

function correctingText () {
  let correctText = document.getElementsByClassName("title")[0];
  correctText.innerHTML = "Exercício 5.1 - JavaScript";
}
correctingText();

function textUpperCase() {
  let maiusculo = document.getElementsByTagName('p');
  for (let i = 0; i < maiusculo.length; i += 1) {
    maiusculo[i].innerHTML = maiusculo[i].innerHTML.toUpperCase();
  }
}
textUpperCase();

function conteudo() {
  let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);
    }
}
conteudo();