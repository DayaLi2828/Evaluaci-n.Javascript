import { validarAcceso } from './auth.js';


console.log(validarAcceso(20, "12345")); 
console.log(validarAcceso(17, "12345")); 
console.log(validarAcceso(25, "abcde")); 
