// Arreglo con las respuestas correctas
let r_correctas = [2, 3, 3, 3, 5, 5];
// Arreglo con las respuestas del usuario
let r_usuario = [];


function respuesta(n_pregunta, respuesta) {

    //Guardar las respuestas del usuario
    r_usuario[n_pregunta - 1] = respuesta.value;

    //Saber el id del div contenedor de la pregunta
    id = "p" + n_pregunta;

    //Obtener los nodos hijos del div contenedor
    labels = document.getElementById(id).childNodes;

    //Estructura if-else para saber el número de opciones de cada pregunta para desaplicar el fondo amarillo
    if (n_pregunta <= 3) {
        labels[3].style.backgroundColor = "#fff";
        labels[5].style.backgroundColor = "#fff";
        labels[7].style.backgroundColor = "#fff";

        labels[3].style.fontWeight = "400";
        labels[5].style.fontWeight = "400";
        labels[7].style.fontWeight = "400";
    } else {
        labels[3].style.backgroundColor = "#fff";
        labels[5].style.backgroundColor = "#fff";
        labels[7].style.backgroundColor = "#fff";
        labels[9].style.backgroundColor = "#fff";
        labels[11].style.backgroundColor = "#fff";

        labels[3].style.fontWeight = "400";
        labels[5].style.fontWeight = "400";
        labels[7].style.fontWeight = "400";
        labels[9].style.fontWeight = "400";
        labels[11].style.fontWeight = "400";
    }

    //Poner el fondo amarillo de la respuesta elegida
    respuesta.parentNode.style.backgroundColor = "rgb(243, 243, 31)";
    respuesta.parentNode.style.fontWeight = "700";
}

function corregir() {

    // Variable de cantidad de respuestas correctas
    let cnt_r_correctas = 0;

    for (let i = 0; i < r_correctas.length; i++) {
        if (r_correctas[i] == r_usuario[i]) {
            cnt_r_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cnt_r_correctas;
}