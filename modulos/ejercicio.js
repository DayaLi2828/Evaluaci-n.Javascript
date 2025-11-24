import { calcularPromedio } from './calculos.js';

let cantidadNotas = 5;
let notas = [4.8, 3.5, 2.9, 4.0, 5.0]; 

// Llamar la función
let resultado = calcularPromedio(notas);

// Mostrar salidas
console.log("Promedio final:", resultado.promedio);
console.log("Categoría de rendimiento:", resultado.rendimiento);
