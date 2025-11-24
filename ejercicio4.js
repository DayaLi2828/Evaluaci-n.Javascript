export function calcularImpuestoUnitario(valor, porcentaje) {//creamos una funcion para calcular el impuesto unitario
    return valor * (porcentaje / 100);//retorna los parametros valor y porcentaje 
}

export default function procesarImpuestos(productos) {//creamos otra funcion para procesar los impuestos 
    let total = 0;
    for (let p of productos) {//creamos un bucle for para que recorra el valor 
        total += p.valor * (p.porcentaje / 100);
    }
    return total;//se retorna el total
}

