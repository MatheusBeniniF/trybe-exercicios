const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  // escreva seu código aqui
  return arrays.reduce((array, cont) => array.concat(cont), []);
}

assert.deepStrictEqual(flatten(),['1', '2', '3', true, 4, 5, 6]);