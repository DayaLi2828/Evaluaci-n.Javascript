import { buscarElemento } from "../5.ejercicio";

// Ejemplo del arreglo con frutas
const lista = ["manzana", "pera", "uva", "mango"];
const elementoBuscado = "pera";//se crea una constante para encontrar un elemento en el arreglo

const resultado = buscarElemento(lista, elementoBuscado);//se crea otra constante que llama la funcion junto con el arreglo y la constante del elemento a buscar

// Condicional para mostrar mensaje amigable
if (resultado) {//immprime si el elemento es encontrado
    console.log(`El elemento "${elementoBuscado}" fue encontrado en la lista.`);
} else {//si no es encontrado
    console.log(` El elemento "${elementoBuscado}" no está en la lista.`);
}
