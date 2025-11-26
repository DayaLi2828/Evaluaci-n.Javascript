export const buscarElemento = (lista, elemento) => { //creamos una funcion buscar elemento con dos parametos lista  elemento
    for (let i = 0; i < lista.length; i++) {//un bucle for que recorre todos los elementos de la lista 
        if (lista[i] === elemento) {//si el elemento se encuentra estrictamente dentro del arreglo
            return true; // retorna true si es encontrado
        }
    }
    return false; // retorna false si no es encontrado
};
