const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite o operador (+, -, *, /): ', (operador) => {
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);

      if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado;

        switch (operador) {
          case '+':
            resultado = numero1 + numero2;
            break;
          case '-':
            resultado = numero1 - numero2;
            break;
          case '*':
            resultado = numero1 * numero2;
            break;
          case '/':
            resultado = numero1 / numero2;
            break;
          default:
            console.log('Operador inválido');
            rl.close();
            return;
        }

        console.log(resultado);
      } else {
        console.log('Por favor, insira números válidos.');
      }

      rl.close();
    });
  });
});
