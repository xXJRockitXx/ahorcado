var pantalla = document.querySelector(".lienzo");
var pincel = pantalla.getContext("2d");

pantalla.width = screen.width * 0.4;
pantalla.height = screen.height * 0.5;

function dibujarLinea(x1, y1, x2, y2) {
    pincel.lineWidth = 3;
    pincel.moveTo(x1, y1);
    pincel.lineTo(x2, y2);
    pincel.strokeStyle = "#F2F2F2";
    pincel.stroke();
}

function dibujarCirculo(x, y, radio) {
    pincel.fillStyle = "#F2F2F2";
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * 3.14);
    pincel.fill();
}

function dibujarHorca(intento) {
    switch (intento) {
        case 1:
            // Dibujamos el "poste"
            dibujarLinea(80, pantalla.height - 20, 80, 80);
            break;

        case 2:
            // Dibujamos una linea horizontal
            dibujarLinea(80, 80, pantalla.width / 2, 80);
            break;

        case 3:
            // Dibujamos la soga
            dibujarLinea(pantalla.width / 2, 80, pantalla.width / 2, pantalla.height / 2 - 80);
            break;

        case 4:
            // Dibujamos la cabeza
            dibujarCirculo(pantalla.width / 2, pantalla.height / 2 - 45, 35);
            break;

        case 5:
            // Dibujamos el cuerpo
            dibujarLinea(pantalla.width / 2, pantalla.height / 2 - 10, pantalla.width / 2, pantalla.height - 120);
            break;

        case 6:
            // Dibujamos la pierna izquierda
            dibujarLinea(pantalla.width / 2, pantalla.height - 120, pantalla.width / 2.3, pantalla.height - 100);
            break;

        case 7:
            // Dibujamos la pierna derecha
            dibujarLinea(pantalla.width / 2, pantalla.height - 120, pantalla.width / (1.8), pantalla.height - 100);
            break;

        case 8:
            // Dibujamos el brazo izquierdo
            dibujarLinea(pantalla.width / 2, pantalla.height / 2, pantalla.width / 2.3, pantalla.height / 1.8);
            break;

        case 9:
            // Dibujamos el brazo derecho
            dibujarLinea(pantalla.width / 2, pantalla.height / 2, pantalla.width / 1.8, pantalla.height / 1.8);
            break;

        default:
            break;
    }

    return intento + 1;
}

/* var intentos = 0;

intentos = dibujarHorca(intentos); */

/* // Dibujamos una linea horizontal
dibujarLinea(40, pantalla.height - 40, pantalla.width - 40, pantalla.height - 40);
// Dibujamos una linea vertical
dibujarLinea(80, pantalla.height - 20, 80, 80);
// Dibujamos otra linea horizontal
dibujarLinea(80, 80, pantalla.width / 2, 80);
// Dibujamos otra linea vertical
dibujarLinea(pantalla.width / 2, 80, pantalla.width / 2, pantalla.height / 2 - 80);
// Dibujamos un circulo
dibujarCirculo(pantalla.width / 2, pantalla.height / 2 - 45, 35);
// Dibujamos otra linea vertical
dibujarLinea(pantalla.width / 2, pantalla.height / 2 - 10, pantalla.width / 2, pantalla.height - 120);
// Dibujamos una linea diagonal
dibujarLinea(pantalla.width / 2, pantalla.height - 120, pantalla.width / 2.3, pantalla.height - 100);
// Dibujamos una linea diagonal
dibujarLinea(pantalla.width / 2, pantalla.height - 120, pantalla.width / (1.8), pantalla.height - 100);
// Dibujamos otra linea diagonal
dibujarLinea(pantalla.width / 2, pantalla.height / 2, pantalla.width / 2.3, pantalla.height / 1.8);
// Dibujamos otra linea diagonal
dibujarLinea(pantalla.width / 2, pantalla.height / 2, pantalla.width / 1.8, pantalla.height / 1.8); */

/* ------------------------------------------------------------------ */

var container = document.querySelector(".letras");
var entrada = document.querySelector(".entrada");
entrada.focus();

var palabras = [];
var palabraEscogida = "";
var letrasDescubiertas = "";

palabras.push("HTML");
palabras.push("JAVASCRIPT");
palabras.push("CANVAS");
palabras.push("ALURA");
palabras.push("CHALLENGE");

function escogerPalabra() {
    var x = Math.floor(Math.random() * palabras.length);
    palabraEscogida = palabras[x];
    mostrarPistas();
}

function mostrarCaracter(caracter) {
    container.innerHTML = "";
    for (var i = 0; i < palabraEscogida.length; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.className = "caracter";

        if (palabraEscogida[i] == caracter) {
            input.style.cssText = "color: #F2F2F2;";
        }

        else {
            input.style.cssText = "color: transparent;";
        }

        input.value = palabraEscogida[i];
        container.appendChild(input);
        input.style.width = input.value.length * 25 + "px";


    }
}

function mostrarPistas() {
    for (var i = 0; i < palabraEscogida.length; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.className = "caracter";
        input.value = palabraEscogida[i];
        input.style.cssText = "color: transparent;";
        container.appendChild(input);
        input.style.width = input.value.length * 25 + "px";
    }
}

escogerPalabra();
entrada.addEventListener('input', updateValue);
var intentos = 1;

// Dibujamos la base de la horca
dibujarLinea(40, pantalla.height - 40, pantalla.width - 40, pantalla.height - 40);

function updateValue(e) {
    if (palabraEscogida.includes(entrada.value.toUpperCase())) {
        mostrarCaracter(entrada.value.toUpperCase());
        entrada.value = ""
    }

    else {
        intentos = dibujarHorca(intentos);
        entrada.value = ""
    }
}