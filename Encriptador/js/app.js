function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i = es para que tome letras Mayus y Minus
    // g = tome en cuenta toda la linea o la oracion
    // m = tome en cuenta multiples lineas

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botoncopiar").style.display = "show";
    document.getElementById("botoncopiar").style.display = "inherit";
}

function desencriptar () {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i = es para que tome letras Mayus y Minus
    // g = tome en cuenta toda la linea o la oración
    // m = tome en cuenta múltiples líneas

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

const copiar = () => {
    var contenido = document.querySelector('#textoDesencriptado');
    contenido.select();
    document.execCommand("copy")
}


var btn = document.querySelector("#botonEncriptado");
        btn.onclick = encriptar;


        var btn2 = document.querySelector("#botonDesencriptado");
        btn2.onclick = desencriptar;

        var btn3 = document.querySelector("#botoncopiar");
        btn3.onclick = copiar;