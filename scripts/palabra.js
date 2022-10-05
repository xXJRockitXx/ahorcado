var nuevaPalabra = document.querySelector(".nueva");
var btnGuardar = document.querySelector(".guardar");

btnGuardar.onclick = function () {
    // Guardaremos la palabra en una cookie
    document.cookie = nuevaPalabra.value.toUpperCase();
    nuevaPalabra.value = "";
}