// Arreglo con las respuestas correctas
let r_correctas = [2, 3, 3, 3, 5, 5];
// Arreglo con las respuestas del usuario
let r_usuario = [];

function respuesta(n_pregunta, respuesta) {
    // Guardar las respuestas del usuario
    r_usuario[n_pregunta - 1] = respuesta.value;

    // Saber el id del div contenedor de la pregunta
    let id = "p" + n_pregunta;

    // Obtener los nodos hijos del div contenedor
    let labels = document.getElementById(id).childNodes;

    // Función auxiliar para restablecer el estilo de los labels
    function restablecerEstilo(labels, indices) {
        indices.forEach(index => {
            labels[index].style.backgroundColor = "#fff";
            labels[index].style.fontWeight = "400";
        });
    }

    if (respuesta.parentNode.style.backgroundColor == "rgb(255, 255, 0)") {
        // Restablecer el estilo de los labels según el número de opciones
        if (n_pregunta <= 3) {
            restablecerEstilo(labels, [3, 5, 7]);
        } else {
            restablecerEstilo(labels, [3, 5, 7, 9, 11]);
        }
        respuesta.checked = false;
    } else {
        // Estructura if-else para saber el número de opciones de cada pregunta para aplicar el fondo amarillo
        if (n_pregunta <= 3) {
            restablecerEstilo(labels, [3, 5, 7]);
        } else {
            restablecerEstilo(labels, [3, 5, 7, 9, 11]);
        }
        respuesta.parentNode.style.backgroundColor = "#ff0";
        respuesta.parentNode.style.fontWeight = "700";
    }
}

function corregir() {
    // Variable de cantidad de respuestas correctas
    let cantidad_correctas = 0;

    // Recorrer las respuestas del usuario y compararlas con las correctas
    for (let i = 0; i < r_correctas.length; i++) {
        if (r_correctas[i] == r_usuario[i]) {
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}