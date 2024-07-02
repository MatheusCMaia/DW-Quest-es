const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarTriangulo(lado1, lado2, lado3) {
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
      return 'Equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return 'Isósceles';
    } else {
      return 'Escaleno';
    }
  } else {
    return 'None'; 
  }
}

rl.question('Digite o primeiro lado do triângulo: ', (lado1) => {
  rl.question('Digite o segundo lado do triângulo: ', (lado2) => {
    rl.question('Digite o terceiro lado do triângulo: ', (lado3) => {
      const ladoA = parseFloat(lado1);
      const ladoB = parseFloat(lado2);
      const ladoC = parseFloat(lado3);
      if (!isNaN(ladoA) && !isNaN(ladoB) && !isNaN(ladoC)) {
        const tipoTriangulo = verificarTriangulo(ladoA, ladoB, ladoC);
        console.log(tipoTriangulo);
      } else {
        console.log('None');
      }

      rl.close();
    });
  });
});
