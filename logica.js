// Este archivo pertenece a la capa de lógica de negocio, pues define la función que se encarga
// de dirigir el flujo del programa, recibiendo información del .html y llamando al otro .js

// La función consigue el valor numérico de los input que hay en el archivo HTML, y los almacena
// en dos variables, después llama una función que se encuentra en el otro archivo .js, y por
// último, accede al <p> con la id "resultado" para editar su contenido con el texto "Resultado:"
// y la variable que contiene el resultado de la suma realizada en el otro archivo .js 
function sumar(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    let resultado = obtenerResultado(a, b);

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}