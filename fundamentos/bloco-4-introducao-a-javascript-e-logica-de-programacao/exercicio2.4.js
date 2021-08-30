function moreCaract(words) {
  let maiorCarac = words[0];
  for (let index in words) {
    if (maiorCarac.length < words[index].length) {
      maiorCarac = words[index];
    }
  }
return maiorCarac;
}

console.log(moreCaract(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

