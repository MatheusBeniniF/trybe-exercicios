// Exercicio 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  console.log(`Exercicio 1: ${rectangle[0]} * ${rectangle[1]} = ${rectangle[0]*rectangle[1]}`);
});

// Exercicio 2
// escreva sum abaixo
const sum = (...numbers) => numbers.reduce(((acc, value) => acc + value), 0);

// Exercicio 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log('Exercicio 3:')
console.log(personLikes(alex));
console.log(personLikes(gunnar));

// Exercicio 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (arr) => arr.filter (
  ({ nationality, bornIn}) => 
  nationality === 'Australian'
  && bornIn > 1901 && bornIn <= 2000,
)

// Exercicio 5
const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a];
