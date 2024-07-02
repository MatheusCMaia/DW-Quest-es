const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (!isNaN(numero1) && !isNaN(numero2)) {
      const resultado = numero1 + numero2;
      console.log(`A soma de ${numero1} + ${numero2} é: ${resultado}`);
    } else {
      console.log('Por favor, insira números válidos.');
    }

    rl.close();
  });
});
