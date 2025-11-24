export function calcularPromedio(notas) {
    let suma = 0;

    // Ciclo para recorrer el arreglo
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Operador matemático para promedio
    let promedio = suma / notas.length;

    // Determinar rendimiento con condicionales
    let rendimiento;
    if (promedio >= 4.5) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    // Retornar objeto con resultados
    return {
        promedio: promedio.toFixed(2),
        rendimiento: rendimiento
    };
}