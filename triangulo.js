function verificarTipoTriangulo(lado1, lado2, lado3) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        return "none"; // Triângulo inválido
    } else if (lado1 === lado2 && lado2 === lado3) {
        return "equilateral"; 
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "isosceles"; 
    } else {
        return "scalene"; 
    }
}

var entrada = prompt("Digite os comprimentos dos três lados do triângulo separados por espaço:");

var lados = entrada.split(" ");
var lado1 = parseFloat(lados[0]);
var lado2 = parseFloat(lados[1]);
var lado3 = parseFloat(lados[2]);

var tipoTriangulo = verificarTipoTriangulo(lado1, lado2, lado3);

switch (tipoTriangulo) {
    case "equilateral":
        console.log("equilátero");
        break;
    case "isosceles":
        console.log("isósceles");
        break;
    case "scalene":
        console.log("Escaleno");
        break;
    case "none":
        console.log("None");
        break;
}

