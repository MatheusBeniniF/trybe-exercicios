const sum = require('./sum');

describe('testando a soma'), () => {
  it('Soma = 9', () => {
    expect(sum(4, 5).toBe(9));
    expect(sum(0, 0).toBe(0));
  });
  it('erro retornado'), () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  }
}