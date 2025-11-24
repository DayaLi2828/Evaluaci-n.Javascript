export const generarTabla = (numero) => {//exportamos la funcion
  const resultados = [];//arreglo donde almacenara la tabla
  for (let i = 1; i <= 10; i++) {//for que recorre cada multiplicación hasta 10
    resultados.push(`${i} * ${numero} = ${i * numero}`);//imprime el resultado de la tabla
  }
  return resultados;//se tetorna el resultado final
};
