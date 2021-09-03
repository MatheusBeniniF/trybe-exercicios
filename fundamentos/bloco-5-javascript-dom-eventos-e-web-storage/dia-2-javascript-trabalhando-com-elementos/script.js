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
const = sectionClass = document.createElement('section');
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

