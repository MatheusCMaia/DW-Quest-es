function calc(num1,num2,operador) {
  let resultado;
  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break
    case '-':
      resultado = num1 - num2;
      break
    case '*':
      resultado = num1 * num2;
      break
    case '/':
      resultado = num1 / num2;
      break;
  }
  return resultado
}
