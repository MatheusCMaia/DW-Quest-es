var numeros = prompt("Digite dois números separados por espaço:");
var numerosArray = numeros.split(" ");
var numero1 = parseFloat(numerosArray[0]);
var numero2 = parseFloat(numerosArray[1]);
var soma = numero1 + numero2;
console.log("A soma dos números é: " + soma);
