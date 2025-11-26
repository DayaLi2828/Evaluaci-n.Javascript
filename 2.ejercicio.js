export const validarAcceso = function(edad, contrasena) {
    const contrasenaValida = "12345"; // contraseña definida en el sistema

    const esMayorDeEdad = edad >= 18;

    // Validar contraseña con comparación estricta
    const esContrasenaCorrecta = contrasena === contrasenaValida;

    if (esMayorDeEdad && esContrasenaCorrecta) {
        return " Acceso concedido: Bienvenido al sistema.";
    } else {
        return " Acceso denegado: Verifique edad y/o contraseña.";
    }
};
<<<<<<< HEAD

=======
>>>>>>> 0243e5c1baca1b1255c387ecf3f4606fd49ad6be
