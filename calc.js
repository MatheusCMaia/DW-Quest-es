var entrada = prompt("Digite dois números e um operador separados por espaço:");

var numeros = entrada.split(" ");
var numero1 = parseFloat(numeros[0]);
var numero2 = parseFloat(numeros[1]);
var operador = numeros[2];

var resultado;

switch (operador) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
}

console.log("O resultado da operação é: " + resultado);

