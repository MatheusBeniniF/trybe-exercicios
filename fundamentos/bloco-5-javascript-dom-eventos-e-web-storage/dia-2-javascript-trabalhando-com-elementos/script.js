//Parte 1
//1
const addH1 = document.createElement('h1');
addH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(addH1);

//2
const mainClass = document.createElement('main');
mainClass.className = 'main-content';
document.body.appendChild(mainClass); 

//3
const sectionClass = document.createElement('section');
sectionClass.className = 'center-content';
mainClass.appendChild(sectionClass);

//4
const paragraph = document.createElement('p');
paragraph.innerHTML = 'Matheus Benini Ferreira';
sectionClass.appendChild(paragraph);

//5
const leftSection = document.createElement('section');
leftSection.className ='left-content';
document.main.appendChild(leftSection);

//6
const rightSection = document.createElement('section');
rightSection.className ='right-content';
document.main.appendChild(rightSection);

//7
const image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
leftSection.appendChild(image);

//8
const unorderedList = document.createElement('ul');
rightSection.appendChild(unorderedList);
const array = ['Um','Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for(let num in array) {
  const orderedList = document.createElement('li');
  orderedList.innerHTML = array[num];
  unorderedList.appendChild(orderedList);
}

//9
for (let i = 0; i < 3; i += 1) {
const addH3 = document.createElement('h3');
main.appendChild(addH3);
}

//Parte 2
//1
const addTittle = document.querySelector('h1');
addTittle.className = 'tittle';

//2
const addDescription = document.querySelector('h3');
for (let i = 0; i < 3; i += 1) {
  addDescription[i].className = 'description';
}

//3
const removeLeftSection = document.getElementsByClassName('left-content')[0];
removeLeftSection.removeChild(removeLeftSection);

//4
centralRightContent = document.getElementsByClassName('right-content')[0];
centralRightContent.style.margin-right = 'auto';

//5
changeBackgroundColor = document.getElementsByClassName('center-content')[0];
changeBackgroundColor.parentNode.style.backgrounColor = 'grenn';

//6
ul.lastChild.remove();
ul.lastChild.remove();