function verificaPalindromo (palavra){
  for(index in palavra){
    if(palavra[index] != palavra[(palavra.length - 1) - index]) {
      return false;
    }
  }
  return true;
}
function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara'));