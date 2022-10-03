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
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * 3.14);
    pincel.fill();
}

// Dibujamos una linea horizontal
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
dibujarLinea(pantalla.width / 2, pantalla.height / 2, pantalla.width / 1.8, pantalla.height / 1.8);